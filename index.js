// created by longkiss17
function PagedList(data = [], opts = {}) {
	this.data = [];
	this.pages = [];

	let originData = data;
	let computedData = data;

	let length = originData.length;
	let page = opts.pageLength || originData.length;
	let scope = opts.scope || 10;
	let current = 1;
	let first = 1;
	let last = 1;
	let sortKey = '';
	let filter = '';
	let filterKey = '';
	let order = -1;
	let sortOrders = {};

	const init = (callback) => {
		if (originData instanceof Array === false) return;

		setFilteredData();
		setSortedData();
		createPagination();

		this.data = computedData.slice(current * page - page, current * page);

		if (callback) callback({ data: this.data, pages: this.pages });
	};

	const createPagination = () => {
		this.pages = [];
		length = computedData.length;
		last = Math.ceil(length / page);
		let extend = length % page > 0 ? 1 : 0;
		for (let i = 1; i <= length / page + extend; i++) {
			this.pages.push({
				index: first + (i - 1),
				current: current === i
			});
		}
		let currentPage = Math.ceil(current / scope) - 1;
		this.pages = this.pages.slice(currentPage * scope, scope * (currentPage + 1));
	};

	// const createSortOrders = () => {
	// 	if (this.data.lenght === 0) return sortOrders;

	// 	let obj = this.data[0];
	// 	Object.keys(obj).forEach((key) => {
	// 		sortOrders[key] = 1;
	// 	});

	// 	return sortOrders;
	// };

	const setSortedData = () => {
		let data = originData;

		if (sortKey) {
			data = data.slice().sort((a, b) => {
				a = a || a[sortKey];
				b = b || b[sortKey];
				return (a === b ? 0 : a > b ? -1 : 1) * order;
			});
		}

		originData = data;
	};

	const setFilteredData = () => {
		let data = originData;

		let check = (row) => {
			return String(row).toLowerCase().indexOf(filter) > -1;
		};

		if (filter) {
			data = data.filter((row) => {
				if (typeof row === 'object') {
					if (filterKey) return check(row[filterKey]);
					else
						return Object.keys(row).some((key) => {
							return check(row[key]);
						});
				} else return check(row);
			});
		}

		computedData = data;
	};

	init(null);

	PagedList.prototype.filter = (text = '', key = '', callback = null) => {
		current = 1;
		filter = text && text.toLowerCase();
		filterKey = key;
		init(callback);
	};

	PagedList.prototype.sort = (key = '', o = 'ASC', callback = null) => {
		sortKey = key;
		order = o === 'ASC' ? -1 : 1;
		sortOrders = createSortOrders();
		init(callback);
	};

	PagedList.prototype.getSortOrders = () => {
		if (this.data.lenght === 0) return sortOrders;

		let obj = this.data[0];
		Object.keys(obj).forEach((key) => {
			sortOrders[key] = 1;
		});

		return sortOrders;
	};

	PagedList.prototype.getSize = () => {
		return originData.length;
	};

	PagedList.prototype.reset = () => {
		current = 1;
		sortKey = '';
		filter = '';
		filterKey = '';
		order = -1;
		init();
	};

	PagedList.prototype.go = (number, callback) => {
		current = number;
		init(callback);
	};

	PagedList.prototype.next = (callback) => {
		current = current === last ? current : current + 1;
		init(callback);
	};

	PagedList.prototype.prev = (callback) => {
		current = current === first ? current : current - 1;
		init(callback);
	};

	PagedList.prototype.first = (callback) => {
		current = first;
		init(callback);
	};

	PagedList.prototype.last = (callback) => {
		current = last;
		init(callback);
	};

	PagedList.prototype.changeViews = (pageLength, callback) => {
		current = 1;
		page = pageLength;
		init(callback);
	};
}

export default PagedList;

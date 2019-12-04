function PagedList(data = [], opts = {}) {
	this.data = data;
	this.length = data.length;
	this.pages = [];

	let origin = data;
	let page = opts.page || data.length;
	let scope = opts.scope || 10;
	let current = 1;
	let first = 1;
	let last = 1;
	let length = 1;
	let sortKey = '';
	let filter = '';
	let filterKey = '';
	let order = -1;
	let sortOrders = {};

	const createData = (callback) => {
		if (origin instanceof Array === false) return;

		setFilteredData();
		setSortedData();
		createPagination();

		this.data = this.data.slice(current * page - page, current * page);

		if (callback) callback();
	};

	const createSortOrders = () => {
		if (this.data.lenght === 0) return sortOrders;

		let obj = this.data[0];
		Object.keys(obj).forEach((key) => {
			sortOrders[key] = 1;
		});

		return sortOrders;
	};

	const setSortedData = () => {
		let data = this.data;

		if (sortKey) {
			data = data.slice().sort((a, b) => {
				a = a || a[sortKey];
				b = b || b[sortKey];
				return (a === b ? 0 : a > b ? -1 : 1) * order;
			});
		}

		this.data = data;
	};

	const setFilteredData = () => {
		let data = origin;

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

		this.data = data;
	};

	const createPagination = () => {
		this.pages = [];

		length = this.data.length;
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

	this.filter = (text = '', key = '') => {
		current = 1;
		filter = text && text.toLowerCase();
		filterKey = key;
		createData();
	};

	this.sort = (key = '', o = 'ASC') => {
		sortKey = key;
		order = o === 'ASC' ? -1 : 1;
		sortOrders = createSortOrders();
		createData();
	};

	this.reset = () => {
		current = 1;
		sortKey = '';
		filter = '';
		filterKey = '';
		order = -1;
		createData();
	};

	this.go = (number, callback) => {
		current = number;
		createData(callback);
	};

	this.next = (callback) => {
		current = current === last ? current : current + 1;
		createData(callback);
	};

	this.prev = (callback) => {
		current = current === first ? current : current - 1;
		createData(callback);
	};

	this.first = (callback) => {
		current = first;
		createData(callback);
	};

	this.last = (callback) => {
		current = last;
		createData(callback);
	};

	this.changeViews = (views, callback) => {
		current = 1;
		page = views;
		createData(callback);
	};

	createData();
}

export default PagedList;

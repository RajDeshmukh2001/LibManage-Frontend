const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_USERS":
            const loadUsers = [...action.payload];

            return {
                ...state,
                filteredUsers: [...loadUsers],
                allUsers: [...loadUsers],
            };

        case "LOAD_BOOKS":
            const loadBooks = [...action.payload];

            return {
                ...state,
                filteredBooks: [...loadBooks],
                allBooks: [...loadBooks],
            };

        case "LOAD_ISSUED_BOOKS":
            const loadIssuedBooks = [...action.payload];

            return {
                ...state,
                filteredIssuedBooks: [...loadIssuedBooks],
                allIssuedBooks: [...loadIssuedBooks]
            }

        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;

            if (name === "category") {
                const updateValues = state.filters[name].includes(value)
                    ? state.filters[name].filter((val) => val !== value)
                    : [...state.filters[name], value];

                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [name]: updateValues,
                    },
                };
            }

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };

        case "FILTER_BOOKS":
            const { allBooks } = state;
            const { search: bookSearch, bookSorting, category, rent, currentStock, maxStock } = state.filters;
            let filterBooks = [...allBooks];

            // Search Book Filter
            if (bookSearch) {
                filterBooks = filterBooks.filter((book) => {
                    return (
                        book.title?.toLowerCase().includes(bookSearch.toLowerCase()) ||
                        book.isbn?.includes(bookSearch) ||
                        book.authors?.find((author) =>
                            author?.toLowerCase().includes(bookSearch.toLowerCase())
                        )
                    );
                });
            }

            // Book Sorting
            if (bookSorting !== "recent") {
                const sortBooks = (a, b) => {
                    if (bookSorting === "title_ascending") {
                        return a.title.localeCompare(b.title);
                    }
                    if (bookSorting === "title_descending") {
                        return b.title.localeCompare(a.title);
                    }
                    if (bookSorting === "high_rent") {
                        return b.rent - a.rent;
                    }
                    if (bookSorting === "low_rent") {
                        return a.rent - b.rent;
                    }
                };
                filterBooks = filterBooks.sort(sortBooks);
            }

            // Category Filter
            if (category.length > 0) {
                filterBooks = filterBooks.filter((book) => {
                    return category.includes(book.category);
                });
            }

            // Rent Range Filter
            if (rent) {
                filterBooks = filterBooks.filter((book) => book.rent <= rent);
            }

            // Current Stock Range Filter
            if (currentStock) {
                filterBooks = filterBooks.filter((book) => book.currentStock <= currentStock);
            }

            // Maximum Stock Range Filter
            if (maxStock) {
                filterBooks = filterBooks.filter((book) => book.maximumStock <= maxStock);
            }

            return {
                ...state,
                filteredBooks: filterBooks,
            };


        case "FILTER_USERS":
            const { allUsers } = state;
            const { search: userSearch, userSorting } = state.filters;
            let filterUsers = [...allUsers];

            // Search User Filter
            if (userSearch) {
                filterUsers = filterUsers.filter((user) => {
                    return (
                        user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
                        user.phone.toLowerCase().includes(userSearch.toLowerCase()) ||
                        user.email.toLowerCase().includes(userSearch.toLowerCase()) ||
                        user.username.toLowerCase().includes(userSearch.toLowerCase())
                    );
                });
            }

            // User Sorting
            if (userSorting !== "recent") {
                const sortUsers = (a, b) => {
                    if (userSorting === "name_ascending") {
                        return a.name.localeCompare(b.name);
                    }

                    if (userSorting === "name_descending") {
                        return b.name.localeCompare(a.name);
                    }

                    if (userSorting === 'books_issued_ascending') {
                        return b.books_assigned - a.books_assigned;
                    }

                    if (userSorting === 'books_issued_descending') {
                        return a.books_assigned - b.books_assigned;
                    }
                };

                filterUsers = filterUsers.sort(sortUsers);
            }

            return {
                ...state,
                filteredUsers: filterUsers,
            };

        case "FILTER_ISSUED_BOOKS":
            const { allIssuedBooks } = state;
            const { search: issuedBookSearch } = state.filters;
            let filterIssuedBooks = [...allIssuedBooks];

            if (issuedBookSearch) {
                filterIssuedBooks = filterIssuedBooks.filter((issuedBook) => {
                    return (
                        issuedBook.book?.title?.toLowerCase().includes(issuedBookSearch.toLowerCase()) ||
                        issuedBook.user?.name?.toLowerCase().includes(issuedBookSearch.toLowerCase()) 
                    )
                })
            }

            return {
                ...state,
                filteredIssuedBooks: filterIssuedBooks
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: "",
                    bookSorting: "recent",
                    userSorting: "recent",
                    rent: 150,
                    currentStock: 10,
                    maxStock: 10,
                    category: [],
                },
            };

        default:
            return state;
    }
}

export default FilterReducer;

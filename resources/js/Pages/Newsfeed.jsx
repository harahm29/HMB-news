import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const Newsfeed = (props) => {
    const [articles, setArticles] = useState([]);
    const [sources, setSources] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [dateFilter, setDateFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [sourceFilter, setSourceFilter] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async (
            searchTerm,
            dateFilter,
            categoryFilter,
            sourceFilter
        ) => {
            try {
                const response = await axios.all([
                    axios.get("/api/news/newsapi", {
                        params: {
                            searchTerm,
                            dateFilter,
                            categoryFilter,
                            sourceFilter,
                        },
                    }),
                    axios.get("/api/news/theguardian", {
                        params: {
                            searchTerm,
                            dateFilter,
                            categoryFilter,
                            sourceFilter,
                        },
                    }),
                    axios.get("/api/news/nytimes", {
                        params: {
                            searchTerm,
                            dateFilter,
                            categoryFilter,
                            sourceFilter,
                        },
                    }),
                ]);

                const articles = [
                    ...response[0].data.articles,
                    ...response[1].data.articles,
                    ...response[2].data.articles,
                ];

                return { articles, error: null };
            } catch (err) {
                return { articles: [], error: err.response.data.message };
            }
        };
        fetchArticles().then((res) => {
            console.log(res);

            if (!res.error) {
                setArticles(res.articles);

                setError(null);
                setLoading(false);
            } else {
                setArticles([]);
                setError(res.error);
                setLoading(false);
            }
        });

        const fetchSources = async () => {
            try {
                const response = await axios.get("/api/sources");
                setSources(response.data.sources);
                setError(null);
            } catch (err) {
                setError(err.response.data.message);
            }
        };
        fetchSources();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            setArticles([]);
            setLoading(true);
            const response = await axios.all([
                axios.get("/api/news/newsapi", {
                    params: {
                        searchTerm,
                        dateFilter,
                        categoryFilter,
                        sourceFilter,
                    },
                }),
                axios.get("/api/news/theguardian", {
                    params: {
                        searchTerm,
                        dateFilter,
                        categoryFilter,
                        sourceFilter,
                    },
                }),
                axios.get("/api/news/nytimes", {
                    params: {
                        searchTerm,
                        dateFilter,
                        categoryFilter,
                        sourceFilter,
                    },
                }),
            ]);
            setArticles([
                ...response[0].data.articles,
                ...response[1].data.articles,
                ...response[2].data.articles,
            ]);
            //console.log(articles);
            setError(null);
            setLoading(false);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    News
                </h2>
            }
        >
            <Head title="News" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <form
                        onSubmit={handleSearch}
                        className="flex flex-wrap space-x-4 mb-8"
                    >
                        <div className="w-full md:w-3/3 shadow p-5 rounded-lg dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 bg-white">
                            <div className="relative">
                                <div className="absolute flex items-center ml-2 h-full">
                                    <svg
                                        className="w-4 h-4 fill-current text-primary-gray-dark"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
                                    </svg>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Search by listing, location, bedroom number..."
                                    className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <p className="font-medium">Filters</p>

                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
                                >
                                    Search
                                </button>
                            </div>

                            <div>
                                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                                    <select
                                        value={categoryFilter}
                                        onChange={(e) =>
                                            setCategoryFilter(e.target.value)
                                        }
                                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                    >
                                        <option value="">All Categories</option>
                                        <option value="business">
                                            Business
                                        </option>
                                        <option value="entertainment">
                                            Entertainment
                                        </option>
                                        <option value="general">General</option>
                                        <option value="health">Health</option>
                                        <option value="science">Science</option>
                                        <option value="sports">Sports</option>
                                        <option value="technology">
                                            Technology
                                        </option>
                                    </select>

                                    <select
                                        value={sourceFilter}
                                        onChange={(e) =>
                                            setSourceFilter(e.target.value)
                                        }
                                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                    >
                                        <option value="">All Sources</option>
                                        {!sources && (
                                            <option value="abc-news">
                                                ABC News
                                            </option>
                                        )}
                                        {!sources && (
                                            <option value="bbc-news">
                                                BBC News
                                            </option>
                                        )}

                                        {!sources && (
                                            <option value="new-york-magazine">
                                                New York Magazine
                                            </option>
                                        )}

                                        {sources?.map((source) => (
                                            <option
                                                key={source.id}
                                                value={source.id}
                                            >
                                                {source.name}
                                            </option>
                                        ))}
                                    </select>

                                    <input
                                        type="date"
                                        value={dateFilter}
                                        onChange={(e) =>
                                            setDateFilter(e.target.value)
                                        }
                                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                            {error}
                        </div>
                    )}
                    {articles === "" && !error && (
                        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4">
                            No articles found.
                        </div>
                    )}
                    {loading ? (
                        <div className="flex justify-center items-center h-screen">
                            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-15 w-15"></div>
                        </div>
                    ) : (
                        articles?.map((article) => (
                            <div
                                key={article.url}
                                className="bg-white light:bg-gray-800 rounded-md shadow-md p-4 mb-4 flex flex-col  bg-white  bg-clip-border shadow-none"
                            >
                                <div className="flex">
                                    {article.img && (
                                        <div className="w-1/3">
                                            <img
                                                className="rounded-lg"
                                                src={article.img}
                                                alt="card image"
                                            />
                                        </div>
                                    )}

                                    <div className="text-secondary w-2/3 flex-1 p-6">
                                        <span className="font-bold uppercase text-blue-500">
                                            {article.author}
                                        </span>
                                        <a href="#">
                                            <h3 className="font-bold mt-4">
                                                {article.title}
                                            </h3>
                                        </a>
                                        <p className="mb-5 opacity-80">
                                            {article.description}
                                            <a
                                                className="font-link text-blue-600"
                                                href={article.url}
                                                target="_blank"
                                            >
                                                Read More
                                            </a>
                                            .
                                        </p>
                                        <p>
                                            by{" "}
                                            <span className="font-bold">
                                                {article.type}
                                            </span>
                                            ,{" "}
                                            {moment(article.publishedAt).format(
                                                "ddd, DD-MMM-yyyy HH:mm:ss a"
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            // <div
                            //     key={article.url}
                            //     className="bg-white light:bg-gray-800 rounded-md shadow-md p-4 mb-4"
                            // >
                            //     <a href={article.url} target="_blank">
                            //         <h2 className="text-xl font-bold">
                            //             {article.title}
                            //         </h2>
                            //     </a>
                            //     <p>{article.description}</p>
                            // </div>
                        ))
                    )}
                </div>
            </div>
            <style>
                {`
                .loader {
                    border-top-color: #3498db;
                    animation: spin 1s ease-in-out infinite;
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}
            </style>
        </AuthenticatedLayout>
    );
};
export default Newsfeed;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=d8cf5650fc70480592446a6fee1196e1";

    axios
      .get(url)
      .then((res) => {
        setBlogs(res?.data?.articles ?? []);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        {blogs.map((item, index) => {
          return (
            <div key={index} className="card m-2 col-4">
              <img
                className="card-img-top"
                src={item.urlToImage}
                alt="Card image cap"
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <Link href={`blogs/${item.title}`} className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;

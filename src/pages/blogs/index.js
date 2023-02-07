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
    const url = "https://api.tvmaze.com/search/shows?q=girls";

    axios
      .get(url)
      .then((res) => {
        setBlogs(res?.data ?? []);
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
                src={item.show.image.medium}
                alt="Card image cap"
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">{item.show.name}</h5>
                <div
                  dangerouslySetInnerHTML={{ __html: item.show.summary }}
                ></div>
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

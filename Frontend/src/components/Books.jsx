import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import "../css/Book.css";
import { useNavigate } from "react-router-dom";

const Books = ({ role }) => {
  const [books, setBooks] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    if (role == "") {
      navigate("/");
    }

    axios
      .get("http://localhost:3001/book/books")
      .then((res) => {
        setBooks(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookCard key={book.id} book={book} role={role}></BookCard>;
      })}
    </div>
  );
};

export default Books;

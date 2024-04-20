import React, { useState } from 'react';
import Navbar from "../Homepage/Navbar/Navbar";
import './donate.css';

function DonateBookForm() {
    const [formData, setFormData] = useState({
        Fname: '',
        email: '',
        phone_number: '',
        title_book: '',
        book_author: '',
        quantity_book: '',
        categories: '',
        product_description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData); // For demonstration, you can replace this with your submission logic
    };

    return (
        <>
        <Navbar />
        <div className="body-donate">
            <form onSubmit={handleSubmit}>
                <h1 className="section-p1 color-h h1-donate">Donate Book</h1>
                <div className="container-donate flex">
                    <div className="professional">
                        <h2 className="color-h">Information</h2>

                        <div className="name">
                            <label className="label-donate" htmlFor="Fname">Full Name:</label>
                            <input className="input-donate" type="text" id="Fname" name="Fname" value={formData.Fname} onChange={handleChange} required />
                        </div>

                        <div className="email">
                            <label className="label-donate" htmlFor="email">Email:</label>
                            <input className="input-donate" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>

                        <div className="phone_number">
                            <label className="label-donate" htmlFor="phone_number">Phone Number:</label>
                            <input className="input-donate" type="number" id="phone_number" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
                        </div>

                        <div className="title_book">
                            <label className="label-donate" htmlFor="title_book">Title of Book:</label>
                            <input className="input-donate" type="text" id="title_book" name="title_book" value={formData.title_book} onChange={handleChange} required />
                        </div>

                        <div className="book_author">
                            <label className="label-donate" htmlFor="book_author">Author of Book:</label>
                            <input className="input-donate" type="text" id="book_author" name="book_author" value={formData.book_author} onChange={handleChange} required />
                        </div>

                        <div className="quantity_book">
                            <label className="label-donate" htmlFor="quantity_book">Quantity of Book:</label>
                            <input className="input-donate" type="number" id="quantity_book" name="quantity_book" value={formData.quantity_book} onChange={handleChange} />
                        </div>

                        <div className="genre">
                            <label className="label-donate" htmlFor="categories">Genre:</label>
                            <select className="select-donate" id="categories" name="categories" value={formData.categories} onChange={handleChange}>
                                <option>(Select any one)</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Non-Fiction">Non-Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Science">Science</option>
                                <option value="Business">Business</option>
                                <option value="Art">Art</option>
                                <option value="Religion">Religion</option>
                                <option value="Poetry">Poetry</option>
                            </select>
                        </div>

                        <div className="section-donate">
                            <label className="label-donate" htmlFor="product-description">Book Descriptions:</label>
                            <textarea id="product-description" name="product_description" value={formData.product_description} onChange={handleChange} rows="4" required />
                        </div>
                    </div>
                </div>
                <button type="submit" className="button-donate section-m2" name="submit">Submit</button>
            </form>
        </div>
        </>
    );
}

export default DonateBookForm;

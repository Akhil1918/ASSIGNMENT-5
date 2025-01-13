import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const AddProduct = () => {
  const [form, setForm] = useState({
    productName: '',
    image: '',
    price: '',
    rating: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.productName.trim()) {
      newErrors.productName = 'Product name is required';
    }
    if (!form.image.trim()) {
      newErrors.image = 'Image URL is required';
    } else if (!/^https?:\/\//.test(form.image)) {
      newErrors.image = 'Invalid URL format';
    }
    if (!form.price) {
      newErrors.price = 'Price is required';
    } else if (form.price <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }
    if (!form.rating) {
      newErrors.rating = 'Rating is required';
    } else if (form.rating < 0 || form.rating > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      axios.post('https://dummyjson.com/products/add', form)
        .then((res) => {
          console.log('Product added:', res.data);
        })
        .catch((error) => {
          console.error('Error adding product:', error);
        });
    }
  };

  return (
    <div>
      <div className="add-product-container">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className="add-product-form gap-5"
        >
          <h2>Add Products</h2>
          <div className='row gap-5'>
            <TextField
              required
              id="product-name"
              label="Product Name"
              className="input-field col"
              value={form.productName}
              error={!!errors.productName}
              helperText={errors.productName}
              onChange={(e) => {
                setForm({ ...form, productName: e.target.value });
              }}
            />
            <TextField
              required
              id="product-image"
              label="Image URL"
              type="url"
              className="input-field col"
              value={form.image}
              error={!!errors.image}
              helperText={errors.image}
              onChange={(e) => {
                setForm({ ...form, image: e.target.value });
              }}
            />
          </div>
          <div className='row gap-5'>
            <TextField
              required
              id="product-price"
              label="Price"
              type="number"
              className="input-field col"
              value={form.price}
              error={!!errors.price}
              helperText={errors.price}
              onChange={(e) => {
                setForm({ ...form, price: e.target.value });
              }}
            />
            <TextField
              required
              id="product-rating"
              label="Rating"
              type="number"
              className="input-field col"
              value={form.rating}
              error={!!errors.rating}
              helperText={errors.rating}
              onChange={(e) => {
                setForm({ ...form, rating: e.target.value });
              }}
            />
          </div>

          <Button type="button" variant="contained" className="submit-button" onClick={handleSubmit}>
            Add Product
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default AddProduct;

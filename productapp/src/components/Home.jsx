import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mt-5 mb-5" style={{ textAlign: 'center' }}>
        PRODUCT DASHBOARD
      </h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography sx={{ mt: 1.5, mb: 1.5 }} color="text.secondary">
                  <strong>Price:</strong> ${product.price}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <strong>Rating:</strong> {product.rating.rate} ★ ({product.rating.count} reviews)
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" style={{ color: 'black' }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

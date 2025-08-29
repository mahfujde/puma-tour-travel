import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const blogPosts = [
    {
      id: 1,
      title: '10 Must-Visit Places in Thailand',
      excerpt: 'Discover the top destinations in Thailand that should be on every traveler\'s bucket list.',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=400',
      category: 'destinations',
      date: '2024-01-15',
      readTime: '5 min read',
      author: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'How to Apply for a Thailand Tourist Visa',
      excerpt: 'A comprehensive guide to getting your Thailand tourist visa with minimal hassle.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400',
      category: 'visa',
      date: '2024-01-10',
      readTime: '8 min read',
      author: 'Michael Chen'
    },
    {
      id: 3,
      title: 'Best Time to Visit Bali: Season Guide',
      excerpt: 'Learn about the different seasons in Bali and when is the best time for your visit.',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=400',
      category: 'travel-tips',
      date: '2024-01-05',
      readTime: '6 min read',
      author: 'Aisha Rahman'
    },
    {
      id: 4,
      title: 'Traditional Foods to Try in Malaysia',
      excerpt: 'Explore the diverse and delicious culinary traditions of Malaysia.',
      image: 'https://images.unsplash.com/photo-1559314809-0f31657403cb?auto=format&fit=crop&q=80&w=400',
      category: 'culture',
      date: '2023-12-28',
      readTime: '7 min read',
      author: 'John Smith'
    },
    {
      id: 5,
      title: 'Budget Travel Tips for Southeast Asia',
      excerpt: 'How to make the most of your Southeast Asia adventure without breaking the bank.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=400',
      category: 'travel-tips',
      date: '2023-12-20',
      readTime: '10 min read',
      author: 'Sarah Johnson'
    },
    {
      id: 6,
      title: 'Hidden Gems of Bangladesh: Beyond Cox\'s Bazar',
      excerpt: 'Discover the lesser-known but equally stunning destinations in Bangladesh.',
      image: 'https://images.unsplash.com/photo-1582573618381-c9a77c31f6b6?auto=format&fit=crop&q=80&w=400',
      category: 'destinations',
      date: '2023-12-15',
      readTime: '9 min read',
      author: 'Aisha Rahman'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'destinations', name: 'Destinations' },
    { id: 'travel-tips', name: 'Travel Tips' },
    { id: 'visa', name: 'Visa Guide' },
    { id: 'culture', name: 'Culture' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Travel Blog - PUMA Tour and Travel</title>
        <meta name="description" content="Read our travel blog for destination guides, travel tips, visa information, and cultural insights for Southeast Asia and Bangladesh." />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>Travel Blog</h1>
          <p>Insights, tips, and guides for your Southeast Asia adventures</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="blog-categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <h2>{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span className="blog-author">By {post.author}</span>
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="btn btn-outline">Read More</Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-posts">
              <h3>No articles found in this category</h3>
              <p>Try selecting a different category or check back later for new content.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="newsletter-signup">
            <h2>Stay Updated with Our Travel Insights</h2>
            <p>Subscribe to our newsletter for the latest travel guides, tips, and exclusive offers.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

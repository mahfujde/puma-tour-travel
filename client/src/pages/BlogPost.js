import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  
  const blogPosts = {
    1: {
      title: '10 Must-Visit Places in Thailand',
      content: `
        <p>Thailand, known as the "Land of Smiles," offers an incredible diversity of experiences for travelers. From bustling cities to serene beaches and ancient temples, here are the top 10 places you must visit:</p>
        
        <h3>1. Bangkok</h3>
        <p>The vibrant capital city offers a perfect blend of traditional culture and modern amenities. Don't miss the Grand Palace, Wat Arun, and the bustling street markets.</p>
        
        <h3>2. Chiang Mai</h3>
        <p>Nestled in the mountains of Northern Thailand, Chiang Mai is known for its beautiful temples, night bazaar, and proximity to elephant sanctuaries.</p>
        
        <h3>3. Phuket</h3>
        <p>Thailand's largest island is famous for its beautiful beaches, vibrant nightlife, and luxury resorts.</p>
        
        <h3>4. Ayutthaya</h3>
        <p>Explore the ancient ruins of this historical city, which was once the capital of the Kingdom of Siam.</p>
        
        <h3>5. Krabi</h3>
        <p>Known for its stunning limestone cliffs, crystal-clear waters, and beautiful islands like Phi Phi and Railay Beach.</p>
        
        <p>Continue reading to discover the remaining 5 must-visit places and tips for making the most of your Thai adventure.</p>
      `,
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=800',
      category: 'destinations',
      date: '2024-01-15',
      readTime: '5 min read',
      author: 'Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    2: {
      title: 'How to Apply for a Thailand Tourist Visa',
      content: `
        <p>Applying for a Thailand tourist visa can seem daunting, but with the right preparation, it's a straightforward process. Here's our step-by-step guide:</p>
        
        <h3>Step 1: Determine if You Need a Visa</h3>
        <p>Citizens of many countries can enter Thailand visa-free for 30 days. Check if your country is on the exemption list before applying.</p>
        
        <h3>Step 2: Gather Required Documents</h3>
        <p>You'll typically need:
        <ul>
          <li>Passport with at least 6 months validity</li>
          <li>Completed visa application form</li>
          <li>Passport-sized photographs</li>
          <li>Proof of onward travel</li>
          <li>Proof of accommodation</li>
          <li>Financial evidence (bank statements)</li>
        </ul>
        </p>
        
        <h3>Step 3: Submit Your Application</h3>
        <p>You can apply at a Thai embassy or consulate in your home country, or use an authorized visa service agency.</p>
        
        <p>Continue reading for detailed information about each step and tips for a successful application.</p>
      `,
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800',
      category: 'visa',
      date: '2024-01-10',
      readTime: '8 min read',
      author: 'Michael Chen',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    }
  };

  const post = blogPosts[id] || {
    title: 'Article Not Found',
    content: '<p>The article you are looking for does not exist.</p>',
    category: 'general',
    date: '2024-01-01',
    readTime: '1 min read',
    author: 'Admin'
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - PUMA Tour and Travel Blog</title>
        <meta name="description" content={post.excerpt || post.title} />
      </Helmet>

      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/blog">Blog</Link> 
            <span className="divider">/</span> 
            <span>{post.category}</span>
          </nav>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>By {post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <article className="blog-post">
            <div className="post-image">
              <img src={post.image} alt={post.title} />
            </div>
            
            <div className="post-content">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            <div className="post-author">
              <img src={post.authorImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200'} alt={post.author} />
              <div className="author-info">
                <h3>About the Author</h3>
                <p className="author-name">{post.author}</p>
                <p>Travel expert with years of experience exploring Southeast Asia and helping travelers create unforgettable journeys.</p>
              </div>
            </div>
            
            <div className="post-actions">
              <div className="social-share">
                <span>Share this article:</span>
                <button className="social-btn">Facebook</button>
                <button className="social-btn">Twitter</button>
                <button className="social-btn">LinkedIn</button>
              </div>
              
              <Link to="/blog" className="btn btn-outline">Back to Blog</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Related Articles</h2>
          <div className="related-posts">
            {Object.values(blogPosts)
              .filter(p => p.id !== parseInt(id))
              .slice(0, 3)
              .map(post => (
                <div key={post.id} className="related-post">
                  <img src={post.image} alt={post.title} />
                  <div className="related-content">
                    <h3>{post.title}</h3>
                    <Link to={`/blog/${post.id}`} className="btn btn-outline">Read More</Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;

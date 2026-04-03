import React, { useState } from 'react';
import { FileText, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NoBlogsFound = ({description}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
    const handleCreatePost = () => {
      navigate(`/blogs/add`);
    };

  // Style Objects
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 16px',
    textAlign: 'center',
  };

  const iconBoxStyle = {
    width: '64px',
    height: '64px',
    backgroundColor: '#f3f4f6',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 600,
    color: '#111827',
    marginBottom: '8px',
    fontFamily: 'sans-serif',
  };

  const textStyle = {
    color: '#6b7280',
    maxWidth: '280px',
    marginBottom: '32px',
    lineHeight: '1.6',
    fontSize: '16px',
  };

  const buttonStyle = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 32px',
    background: 'linear-gradient(to right, #2563eb, #4f46e5)',
    color: 'white',
    fontWeight: 600,
    fontSize: '18px',
    borderRadius: '16px',
    border: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    // Dynamic Shadow and Lift
    boxShadow: isHovered 
      ? '0 15px 30px rgba(37, 99, 235, 0.4)' 
      : '0 10px 20px rgba(37, 99, 235, 0.3)',
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
  };

  const iconStyle = {
    transition: 'transform 0.5s ease',
    transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
  };

  return (
    <div style={containerStyle}>
      {/* Icon Background */}
      <div style={iconBoxStyle}>
        <FileText style={{ color: '#9ca3af' }} size={32} />
      </div>

      {/* Content */}
      <h3 style={titleStyle}>No posts yet</h3>
      <p style={textStyle}>
        {description}
      </p>

      {/* Attractive Action Button */}
      <button 
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
        onClick={handleCreatePost}
      >
        <Plus style={iconStyle} size={22} />
        <span>Create New Post</span>
      </button>
    </div>
  );
};

export default NoBlogsFound;
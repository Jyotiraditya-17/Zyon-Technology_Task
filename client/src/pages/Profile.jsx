import { useEffect, useState } from 'react';
import { Card, Avatar, Descriptions, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [joinedAt, setJoinedAt] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/user`, { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        setJoinedAt(res.data.joining ? new Date(res.data.joining).toLocaleDateString() : '2019-01-01');
      })
      .catch(() => window.location.href = '/');
  }, []);

  const handleImageChange = async ({ file }) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true
      });
      setUser((prev) => ({ ...prev, picture: res.data.picture }));
      message.success('Profile picture updated');
    } catch {
      message.error('Failed to upload image');
    }
  };

  if (!user) return <div className="p-4">Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card
        title="Admin Profile"
        className="w-full max-w-xl"
        bordered
        extra={<span>Authenticated Admin</span>}
      >
        <div className="flex items-center mb-4">
          <Avatar size={80} src={user.picture || user.image} />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p>{user.email}</p>
            <p className="text-gray-600">Active since: {joinedAt}</p>
          </div>
        </div>

        <Upload showUploadList={false} customRequest={handleImageChange}>
          <button className="mt-2 mb-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <UploadOutlined /> Change Profile Picture
          </button>
        </Upload>

        <Descriptions title="Profile Details" bordered column={1} className="mt-4">
          <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
          <Descriptions.Item label="Google ID">{user.id}</Descriptions.Item>
          <Descriptions.Item label="Employee Type">{user.type || 'Admin'}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default Profile;
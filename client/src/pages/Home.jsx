import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
<<<<<<< HEAD
import axios from "axios";
=======
import axios from "axios"

>>>>>>> b7a3515420fbdfc86b9579b0a789b0ef43cca2fb
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

<<<<<<< HEAD
const Home = ({type}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);
=======
const Home = () => {

  const [video, setVideos] = useState([])

  useEffect (() => {
    const fetchVideos = async () => {
      const res = axios.get(`videos/${type}`)
      setVideos(res.data)
    }
    fetchVideos()
  }, [type])
>>>>>>> b7a3515420fbdfc86b9579b0a789b0ef43cca2fb

  return (
    <Container>
      {videos.map((video) => (
<<<<<<< HEAD
        <Card key={video._id} video={video}/>
=======
        <Card />
>>>>>>> b7a3515420fbdfc86b9579b0a789b0ef43cca2fb
      ))}
    </Container>
  );
};

export default Home;
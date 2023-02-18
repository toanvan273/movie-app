import axios from "axios"
import { Config } from "../constants/config"



export const getLastest = () => {
  return axios({
    method: "get",
    url: `${Config.API}/movie/latest`,
    headers: {
      Authorization: "Bearer " + Config.accessToken,
    }
  })
}

export const getNowPlaying = () => {
  return axios({
    method: "get",
    url: `${Config.API}/movie/now_playing`,
    headers: {
      Authorization: "Bearer " + Config.accessToken,
    }
  })
}

export const getPopular = (page) => {

  return axios({
    method: "get",
    url: `${Config.API}/movie/popular?page=${page?page:1}`,
    headers: {
      Authorization: "Bearer " + Config.accessToken,
    }
  })
}

export const getTopRated = () => {
  return axios({
    method: "get",
    url: `${Config.API}/movie/top_rated`,
    headers: {
      Authorization: "Bearer " + Config.accessToken,
    }
  })
}

export const getDetails = (movie_id) => {
  return axios({
    method: "get",
    url: `${Config.API}/movie/${movie_id}`,
    headers: {
      Authorization: "Bearer " + Config.accessToken,
    }
  })
}

export const getImages = (movie_id) => {
  return axios({
    method: "get",
    url: `${Config.API}/movie/${movie_id}/images`,
    headers: {
      Authorization: "Bearer " + Config.accessToken,
    }
  })
}

export const getVideos = (movie_id) => {
  return axios({
    method: "get",
    url: `${Config.API}/movie/${movie_id}/videos`,
    headers: {
      Authorization: "Bearer " + Config.accessToken,
    }
  })
}
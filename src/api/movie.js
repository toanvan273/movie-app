import axios from "axios"
import moment from "moment"
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

export const getNowPlaying = (page,search) => {
  const sort_by = search && search.sortType ? `&sort_by=${search.sortType}` : '';
  const release_date_gte = search && search.fromReleaseDate ? `&release_date.gte=${moment(search.fromReleaseDate).format('YYYY-MM-DD')}` : '';
  const release_date_lte = search && search.toReleaseDate ? `&release_date.lte${moment(search.toReleaseDate).format('YYYY-MM-DD')}` : ''
  return axios({
    method: "get",
    url: `${Config.API}/movie/now_playing?page=${page?page:1}`+sort_by+release_date_gte+release_date_lte,
    headers: {
      Authorization: "Bearer " + Config.accessToken,
    }
  })
}

export const getPopular = (page, search) => {
  const sort_by = search && search.sortType ? `&sort_by=${search.sortType}` : '';
  const release_date_gte = search && search.fromReleaseDate ? `&release_date.gte=${moment(search.fromReleaseDate).format('YYYY-MM-DD')}` : '';
  const release_date_lte = search && search.toReleaseDate ? `&release_date.lte${moment(search.toReleaseDate).format('YYYY-MM-DD')}` : ''
  return axios({
    method: "get",
    url: `${Config.API}/movie/popular?page=${page?page:1}`+sort_by+release_date_gte+release_date_lte,
    headers: {
      Authorization: "Bearer " + Config.accessToken,
    }
  })
}

export const getTopRated = (page,search) => {
  const sort_by = search && search.sortType ? `&sort_by=${search.sortType}` : '';
  const release_date_gte = search && search.fromReleaseDate ? `&release_date.gte=${moment(search.fromReleaseDate).format('YYYY-MM-DD')}` : '';
  const release_date_lte = search && search.toReleaseDate ? `&release_date.lte${moment(search.toReleaseDate).format('YYYY-MM-DD')}` : ''
  return axios({
    method: "get",
    url: `${Config.API}/movie/top_rated?page=${page?page:1}`+sort_by+release_date_gte+release_date_lte,
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
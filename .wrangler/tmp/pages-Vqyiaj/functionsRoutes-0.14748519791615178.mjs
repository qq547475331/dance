import { onRequestPost as __api_upload_ts_onRequestPost } from "E:\\r2点播\\frontend\\functions\\api\\upload.ts"
import { onRequestGet as __api_videos_ts_onRequestGet } from "E:\\r2点播\\frontend\\functions\\api\\videos.ts"

export const routes = [
    {
      routePath: "/api/upload",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_upload_ts_onRequestPost],
    },
  {
      routePath: "/api/videos",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_videos_ts_onRequestGet],
    },
  ]
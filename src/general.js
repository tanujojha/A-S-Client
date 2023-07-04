// export const server_url_local = "http://localhost:8800";

// export const server_url_vercel = "https://artsocialsserver.vercel.app";

// export const public_folder_local = "http://localhost:8800/images/";

// export const public_folder_vercel = "https://artsocialsserver.vercel.app/images/";

const prod = {
    url: {
        server_url: "https://artsocialsserver.vercel.app",
        public_folder: "https://artsocialsserver.vercel.app/images/",
    }
}

const dev = {
    url: {
        server_url: "http://localhost:8800",
        public_folder: "http://localhost:8800/images/",
    }
}

export const genConfig = process.env.NODE_ENV === "development" ? dev : prod;
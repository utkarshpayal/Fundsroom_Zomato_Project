# zomato (zomato clone) with extra features

**Live App Demo Link:** [Zomato Clone Live App Demo](https://zomato-clonetest.vercel.app/)

Zomato is an online food ordering application. This project is a frontend clone of Zomato built with React JS and Vite, extended with two extra features on the restaurant page:

- **Live stream by chef** ("Meeting" tab) – a "Cooking Live Stream" panel with *Join Live Stream* / *Leave Live Stream* buttons that turns on your camera and microphone in the browser.
- **Recorded video learning** ("Videos" tab) – a grid of embedded YouTube cooking/recipe videos with thumbnails, a *Load More* button, and a modal player.

All restaurant, user, and order data shown in the app is static sample data; there is no backend API in this repository.

## Tasks:

1. Add live stream for chef
2. Add videos section for recipe learning

## Pages Developed:

1. [Home Page](#home-page)
2. Login Page (modal)
3. [User Profile Page](#user-profile-page)
4. Restaurant Home Page
5. [Restaurant Order Page](#hotel-order-page)
6. Restaurant Review Page
7. Restaurant Photos Page
8. Restaurant Menu Page
9. [Live Stream Page](#live-stream-page) (restaurant "Meeting" tab)
10. [Videos Page](#videos-page) (restaurant "Videos" tab)
11. [Order Page](#order-online-page)
12. Dinning Page
13. Nightlife Page

## Routes

Defined in `src/main.jsx`:

| Route | Page |
| ----- | ---- |
| `/` | Home |
| `/show-case?page=order-online` \| `dinning-out` \| `night-life` | Order online / Dining out / Nightlife listings |
| `/user/:userId/:hashId` | User profile |
| `/:city/:hotel` | Restaurant overview |
| `/:city/:hotel/:page` | Restaurant sub-page: `order`, `reviews`, `photos`, `menu`, `meeting` (live stream), `video` (recipe videos) |
| `*` | Error (404) page |

## Libraries Used:

| Library Name | Description |
| ------------ | ----------- |
| React Js     | Frontend Framework |
| React Slick  | For carousel's in the project |
| slick-carousel  | For carousel's in the project (used with React Slick) |
| React Router v6  | Routing library  |
| Formik  | Library for Forms |
| Yup | Form validation |
| socket.io-client | Used by the live stream ("Meeting") component |
| Tailwind CSS / PostCSS / Autoprefixer | Styling tooling (alongside CSS modules) |

## Tools Used:

| Tool Name | Description |
| ----------- | ----------- |
| Vitejs    | Vitejs is a development environment tool |

## Getting Started

Prerequisites: Node.js and npm.

```sh
npm install
npm run dev
```

Available scripts (from `package.json`):

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |

There is no test script in this project.

### Live stream server (needs confirmation)

The live stream component (`src/components/RestaurantComponents/OrderBodyComponent/Components/MeetingComponent/MeetingComponent.jsx`) connects to a Socket.IO server at the hard-coded URL `http://localhost:8080` and emits a `stream` event. No server for this is included in this repository, so only the local camera preview works out of the box. To change the server address, edit that URL in the component. (The `proxy` field in `package.json` is not used by Vite.)

No environment variables are used.

## ScreenShots

# Home Page:

<img src="Project Images/Home.png" />



# Order Online Page:

<img src="Project Images/OrderOnlinePage.png" />


# User Profile Page:

<img src="Project Images/UserProfilePage.png" />


# Hotel Order Page:

<img src="Project Images/HotelOrderPage.png" />

# Live Stream Page:

<img src="Project Images/livestream.png" />

# Videos Page:

<img src="Project Images/videos.png" />
<img src="Project Images/play.png" />

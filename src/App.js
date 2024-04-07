import './App.css';

// 👇️ import the image
import MyImage from './house.png';

export default function App() {
  return (
    <div>
      {/* 👇️ local image */}
      <img src={MyImage} alt="house" />

      {/* 👇️ external image */}
      <img
        src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
        alt="car"
      />
    </div>
  );
}

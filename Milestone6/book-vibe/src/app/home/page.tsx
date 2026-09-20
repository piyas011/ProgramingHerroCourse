import AllBooks from "@/components/allBooks";
import Banner from "@/components/banner";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <AllBooks />
    </div>
  );
};

export default HomePage;

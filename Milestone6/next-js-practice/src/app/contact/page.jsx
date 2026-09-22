import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-5xl">Contact Page</h1>
      <Image src="/images/img.jpg" alt="Images" width={500} height={500} />
      <Image src="/images/piyas.jpg" alt="Images" width={500} height={500} />
      <Image
        src="https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_640.jpg"
        alt="Images"
        width={500}
        height={500}
      />
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgG_47eIaubg55dDG180irshLZh9wAzlHLGRwApn_3ZQ&s=10"
        alt="Images"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ContactPage;

import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum! */}
          I'm Sneha Patil a Computer Science student . I born in Maharashtra. I
          spend most of my time , building stuff , listening to music.I started
          working on the web two years ago.Since then,I have been creating
          clean, elegant and creative designs for the web. I have learned and
          tried to master HTML,CSS,JavaScript,React js,Express js,Node
          js,C++,Java,SQL . I love to create high performance & rich interactive
          websites that work across all platforms & devices. With a strong
          emphasis on "Progressive Enhancement".
          {/* I look for creative ways
          to push the boundaries of website front-end code without compromising
          on browser support and performance. 
Through my experience on the internet , I've come to meet some of the most talented people, who have taught me much.
So now you know a bit about me. Check out my portfolio ,or if you are really interested head over to the contact area and shoot me an email.
          */}
        </p>

        <br />

        <p className="text-xl">
          {/* I'm a Computer Science student . I born in the Konkan region in Maharashtra. I spend
          most of my time , building stuff , listening to music.
          I’m a front-end web developer with over a decade of experience. I love
           to create high performance & rich
          interactive websites that work across all platforms & devices.
          Although I'm very familiar with using frameworks, my websites are
          primarily hand-coded using REACT ,HTML5, CSS3,  JavaScript. With a
          strong emphasis on "Progressive Enhancement", I look for creative ways
          to push the boundaries of website front-end code without compromising
          on browser support and performance.  */}
          I look for creative ways to push the boundaries of website front-end
          code without compromising on browser support and performance. Through
          my experience on the internet , I've come to meet some of the most
          talented people, who have taught me much. So now you know a bit about
          me. Check out my portfolio ,or if you are really interested head over
          to the contact area and shoot me an email 📧
        </p>
      </div>
    </div>
  );
};

export default About;

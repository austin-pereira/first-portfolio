import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pb-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="mb-14">
          <p className="text-xl mt-20">
            Heylo, <br />
            I am Austin Pereira. I am a software developer and my passion lies in analyzing 
            data and building efficient 
            algorithms to extract conclusions and solve problems around it. I did my 
            high school from DPS and Don Bosco Navi Mumbai, India and studied at
            De Anza college for two years and transferred to UC Berkeley as a Data
            Science major. I will be emphasizing in Cognition and Economics.
          </p>

          <br />

          <p className="text-xl">
            I am very passionate about how the economy works and collecting more
            data to find conclusions. Also, I am interested in robotics and the brain.
            My career timeline so far:
          </p>
          <br />
          <ul className="list-disc list-inside mt-4">
            <li className="pl-4 py-2 border-l-4 border-blue-500 text-lg">
              <span className="font-bold">De Anza College (2021-2023)</span><br />
              Studied computer science and data analysis
            </li>
            <li className="pl-4 py-2 border-l-4 border-blue-500 mt-4 text-lg">
              <span className="font-bold">UC Berkeley (2023-present)</span><br />
              Pursuing a Data Science degree, emphasizing in Cognition and Economics
            </li>
          </ul>

          <br />

          <p className="text-xl mt-8">
            So, for those who want to know my end goal, I envision a future where innovation thrives and ideas shape the world. After gaining experience working on impactful products and serving as a strategic consultant, my ultimate aspiration is to venture into the realm of Venture Capital. I aim to establish my own investment firm, dedicated to identifying and nurturing exceptional individuals and disruptive ideas that have the potential to shape the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

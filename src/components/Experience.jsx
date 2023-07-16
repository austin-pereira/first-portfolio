import React from 'react';

const Experience = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white pb-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div className="mb-14">
          <div className="flex items-center mb-8">
            <div className="h-1 w-12 bg-white mr-4"></div>
            <p className="text-lg font-bold">Professional Experience</p>
          </div>

          <div className="border-l-2 border-white pl-4 mb-8">
            <p className="text-lg">
              <span className="font-bold">Software Developer</span> | Company XYZ
            </p>
            <p className="text-md text-gray-400">June 2020 - Present</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id enim eu orci dictum viverra nec nec urna. Integer sed finibus nulla. Sed eget aliquam enim, et fermentum leo. Donec vestibulum urna ut leo pulvinar, sed feugiat nisl accumsan. Suspendisse potenti.
            </p>
          </div>

          {/* Add more professional experiences as needed */}

          <div className="flex items-center mb-8">
            <div className="h-1 w-12 bg-white mr-4"></div>
            <p className="text-lg font-bold">Skills</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-white rounded-md py-2 px-4">JavaScript</div>
            <div className="border border-white rounded-md py-2 px-4">React</div>
            <div className="border border-white rounded-md py-2 px-4">CSS</div>
            <div className="border border-white rounded-md py-2 px-4">HTML</div>
            {/* Add more skills as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;


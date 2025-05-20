import Image from 'next/image';
import React from 'react';
import { ContributionGraph } from '../github/contribution-graph';
import { motion } from 'framer-motion';

type Education = {
  duration: string;
  institute: string;
  subject: string;
  result: string;
};

function AboutMeSection() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">
          <div className="inset-0 z-10 flex justify-center transition-opacity duration-300">
            <Image
              src="/dilini-pp.jpg"
              alt="hero"
              className="h-48 w-auto rounded-full"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-center pt-10 text-4xl md:col-span-8 md:pt-0">
          Hey there! It&apos;s me, Dilini.
        </div>
      </div>
      <div className="mt-10 text-gray-600 dark:text-fontGray">
        I am a dedicated, self-motivated, and hardworking undergraduate who is
        willing to gain hands-on experience with existing and emerging
        technologies in the field of information technology, seeking an
        opportunity to bring value to the organization and to improve my skills
        and knowledge.
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative mt-8 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
      >
        <h3 className="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
          GitHub Contributions
        </h3>
        <ContributionGraph className="w-full" />
      </motion.div>
    </div>
  );
}

export default AboutMeSection;

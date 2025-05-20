'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '@/lib/data/skills';
import { skillCategories } from '@/lib/data/skills';
import { SkillCategory } from '@/types/skills';

const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategory>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = skills.filter((skill) =>
    selectedCategory === 'All'
      ? true
      : skill.category.includes(selectedCategory)
  );

  return (
    <div className="space-y-8">
      {/* Category filters */}
      <div className="flex flex-wrap gap-4">
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-2 transition-all ${
              selectedCategory === category
                ? 'bg-Secondary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="w-full overflow-x-hidden px-4 md:h-[32.5rem] md:overflow-y-auto">
        <motion.div
          layout
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative"
              >
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-white p-4 shadow-lg transition-all dark:bg-gray-900"
                >
                  <div className="flex flex-col items-center">
                    <skill.Icon className="h-10 w-10 text-Secondary" />
                    <span className="mt-2 text-xs">{skill.name}</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;

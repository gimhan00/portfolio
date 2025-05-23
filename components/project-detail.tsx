'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowLeft,
  ArrowRight,
  Github,
  Link as LinkIcon,
} from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/types/project';
import { VisuallyHidden } from '@/components/ui/visually-hidden';

const ProjectDetail = ({
  project,
  isOpen,
  onClose,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(1);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const navigateImage = (newDirection: number) => {
    setDirection(newDirection);
    setActiveImageIndex((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) return project.images.length - 1;
      if (nextIndex >= project.images.length) return 0;
      return nextIndex;
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-h-[95vh] max-w-[95vw] overflow-hidden bg-background/95 p-10 backdrop-blur supports-[backdrop-filter]:bg-background lg:p-0">
        <VisuallyHidden>
          <DialogTitle>{project.name}</DialogTitle>
        </VisuallyHidden>
        <div className="flex h-full max-h-[95vh] flex-col lg:flex-row">
          {/* Left: Image Showcase */}
          <div className="relative h-[45vh] w-full bg-background lg:h-full lg:w-2/3">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeImageIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images[activeImageIndex]}
                  alt={`${project.name} showcase ${activeImageIndex + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg p-4"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateImage(-1)}
              className="absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-background/80 p-2 transition-colors hover:bg-background"
            >
              <ArrowLeft className="h-6 w-6 text-muted-foreground dark:text-white" />
            </button>
            <button
              onClick={() => navigateImage(1)}
              className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-background/80 p-2 transition-colors hover:bg-background"
            >
              <ArrowRight className="h-6 w-6 text-muted-foreground dark:text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-sm text-muted-foreground dark:bg-gray-800 dark:text-white">
              {activeImageIndex + 1} / {project.images.length}
            </div>
          </div>

          {/* Right: Project Details */}
          <div className="w-full overflow-y-auto bg-background p-6 lg:w-1/3">
            <div className="mb-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                {project.client_logo && (
                  <Image
                    src={project.client_logo}
                    alt={project.client}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <h2 className="text-2xl font-bold dark:text-gray-50">
                    {project.name}
                  </h2>
                  <p className="text-muted-foreground">{project.client}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Status and Timeline */}
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="text-sm">
                  {project.status}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {new Date(project.startDate).toLocaleDateString()} -
                  {project.endDate
                    ? new Date(project.endDate).toLocaleDateString()
                    : 'Present'}
                </span>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed dark:text-gray-50">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div>
                <h3 className="mb-2 text-lg font-semibold dark:text-white">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill.name} variant="outline">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="mb-2 text-lg font-semibold dark:text-white">
                  My contributions
                </h3>
                <ul className="space-y-2">
                  {project.my_contribution.map((my_contribution) => (
                    <li
                      key={my_contribution.title}
                      className="space-y-1 dark:text-gray-50"
                    >
                      <h4 className="font-medium">{my_contribution.title}</h4>
                      <p className="text-sm text-muted-foreground dark:text-gray-200">
                        {my_contribution.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                )}
                {project.hosted_link && (
                  <a
                    href={project.hosted_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-secondary-foreground transition-colors hover:bg-secondary/90"
                  >
                    <LinkIcon className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;

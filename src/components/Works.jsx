import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import { linkIcon } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const GitHubButton = ({ source_code_link }) => {

  return (
    <div
      onClick={() => window.open(source_code_link, "_blank")}
      className="black-gradient mr-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
      title="Check the project's source code !"
    >
      <img
        src={github}
        alt="github"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
  )

}

const LinkProjectButton = ({ link_project }) => {

  return (
    <div
      onClick={() => window.open(project_link, "_blank")}
      className="white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
      title="See this project online !"
    >
      <img
        src={linkIcon}
        alt="Link icon"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
  )

}

const ProjectButtons = ({ source_code_link, project_link }) => {

  let returnVar = [];

  if (
    typeof (source_code_link) !== 'undefined'
    && source_code_link !== ''
  ) {
    returnVar.push(<GitHubButton source_code_link={source_code_link} />)
  }

  if (
    typeof (project_link) !== 'undefined'
    && project_link !== ''
  ) {
    returnVar.push(<LinkProjectButton project_link={project_link} />)
  }

  return returnVar;
}

const ProjectCard = ({ index, name, description, tags, image, source_code_link, project_link }) => {
  return (
    <motion.div
    // variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl xs:w-full sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[280px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <ProjectButtons
              source_code_link={source_code_link}
              project_link={project_link}
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <p
              key={`project-${index}- tag-${i}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
      // variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div
        className="w-full flex"
      >
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Just some concrete projects to showcase my different skills.
          Every project is briefly described, and to dig more you may
          find a link to the project or a link to the GitHub repository.
        </motion.p>
      </div>

      <div
        className="mt-20 flex flex-wrap gap-7"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")
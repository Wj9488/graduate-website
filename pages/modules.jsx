import { useState } from "react"; // Import useState for managing state
import PageMetadata from "@/components/sitewide/PageMetadata";
import Nav from "@/components/sitewide/Nav";
import VariableSizeHeading from "@/components/sitewide/VariableSizeHeading";
import { motion as a } from "framer-motion";
import EndCta from "@/components/sitewide/EndCta";
import AnimatedLgText from "@/components/sitewide/AnimatedLgText";
import Footer from "@/components/sitewide/Footer";

const Modules = () => {
  const initialCourses = [
    { name: "Finance for Managers", grade: "61%", year: "3rd" },
    { name: "Bitcoin, Money and Trust", grade: "70%", year: "3rd" },
    { name: "Thinking Entrepreneurially", grade: "78%", year: "3rd" },
    { name: "Strategic Management", grade: "62%", year: "3rd" },
    {
      name: "Managing Change and Crisis in Organisations",
      grade: "76%",
      year: "3rd",
    },
    { name: "Managing Entrepreneurially", grade: "81%", year: "3rd" },
    { name: "Strategic Digital Marketing Practice", grade: "81%", year: "3rd" },
    { name: "Managerial Accounting", grade: "90%", year: "2nd" },
    { name: "Operations Management", grade: "53%", year: "2nd" },
    { name: "Consumer Behaviour", grade: "76%", year: "2nd" },
    { name: "Human Resource Management", grade: "67%", year: "2nd" },
    { name: "Leadership: Challenges and Practice", grade: "73%", year: "2nd" },
    { name: "Entrepreneurial Value Creation", grade: "66%", year: "2nd" },
    { name: "Organisational Behaviour", grade: "79%", year: "2nd" },
    { name: "Introduction to Accounting", grade: "65%", year: "1st" },
    { name: "Economics for Management", grade: "48%", year: "1st" },
    { name: "Fundamentals of Marketing", grade: "61%", year: "1st" },
    { name: "Discovering Management", grade: "66%", year: "1st" },
    { name: "Statistics for Business", grade: "76%", year: "1st" },
    { name: "French for Proficient Speakers", grade: "69%", year: "1st" },
  ];

  // States
  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState("");
  const [nameAsc, setNameAsc] = useState(true);
  const [gradeAsc, setGradeAsc] = useState(true);
  const [yearAsc, setYearAsc] = useState(true);

  // Helper functions for sorting
  const sortByName = () => {
    const sortedCourses = [...courses].sort((a, b) =>
      nameAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setCourses(sortedCourses);
    setNameAsc(!nameAsc); // Toggle order for next click
  };

  const sortByGrade = () => {
    const sortedCourses = [...courses].sort((a, b) =>
      gradeAsc
        ? parseInt(a.grade) - parseInt(b.grade)
        : parseInt(b.grade) - parseInt(a.grade)
    );
    setCourses(sortedCourses);
    setGradeAsc(!gradeAsc); // Toggle order for next click
  };

  const sortByYear = () => {
    const yearOrder = { "1st": 1, "2nd": 2, "3rd": 3 };
    const sortedCourses = [...courses].sort((a, b) =>
      yearAsc
        ? yearOrder[a.year] - yearOrder[b.year]
        : yearOrder[b.year] - yearOrder[a.year]
    );
    setCourses(sortedCourses);
    setYearAsc(!yearAsc); // Toggle order for next click
  };

  // Filter courses based on search input
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageMetadata PageTitle={"All Modules"} />
      <main className="overflow-x-hidden">
        <Nav NavPageIdentifierColour={"text__c_reduced_black"} />
        <header className="standard__x_padding_inner p-section-t lg:flex items-end justify-between">
          <VariableSizeHeading
            fontSize={
              "text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[6rem] pxs-t"
            }
            text={"My Degree Modules"}
          />
          <div>
            <AnimatedLgText 
              text={"Exeter University"}
              extraCss={"text__c_reduced_black lg:text-right pt-[2.5rem]"}
            />
            <AnimatedLgText 
              text={"Business Management"}
              extraCss={""}
            />
          </div>
          <div className="lg:hidden block pt-[1.25rem] lg:pt-0">
            <input
              className="text-xs lg:text-sm placeholder-[#15151554] border-transparent py-1 accent__c_white bg-transparent border border-b-[#15151554] focus:border-b-black focus:border-b-1"
              type="text"
              placeholder="Search Modules..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        <section className="pm-t standard__x_padding_inner">
          <div className="module__grid text-left">
            <button
              onClick={sortByName}
              className="flex gap-1 items-center text-xs lg:text-sm"
            >
              Name
              <svg
                width="15"
                height="15"
                className="fill-[#2a2a2a]"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              onClick={sortByGrade}
              className="flex gap-1 items-center text-xs lg:text-sm ml-[1.25rem] lg:mr-0"
            >
              Grade
              <svg
                width="15"
                height="15"
                className="fill-[#2a2a2a]"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              onClick={sortByYear}
              className="flex gap-1 items-center text-xs lg:text-sm ml-[1.25rem] lg:mr-0"
            >
              Year
              <svg
                width="15"
                height="15"
                className="fill-[#2a2a2a]"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <input
              className="hidden lg:block text-xs lg:text-sm placeholder-[#15151554] border-transparent py-1 accent__c_white bg-transparent border border-b-[#15151554] focus:border-b-black focus:border-b-1"
              type="text"
              placeholder="Search Modules..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        <section className="pm-t standard__x_padding_inner">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <a.div
                key={index}
                initial={{ filter: "blur(10px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.25 + index * 0.05 }}
                className="hover:bg-[#ededed] accent__c_white transition-all duration-600 ease-in-out module__grid text-left py-1 border border-b-[#15151554] border-l-transparent border-r-transparent border-t-transparent lg:border-none"
              >
                <p className="2xl:text-lg lg:text-base text-sm">
                  {course.name}
                </p>
                <p className="2xl:text-lg lg:text-base text-sm ml-[1.25rem] lg:mr-0">
                  {course.grade}
                </p>
                <p className="2xl:text-lg lg:text-base text-sm ml-[1.25rem] lg:mr-0">
                  {course.year} <span className="lg:hidden">yr</span>
                  <span className="text-[1px] lg:text-base 2xl:text-lg opacity-0 lg:opacity-100">Year</span>
                </p>
              </a.div>
            ))
          ) : (
            <a.p className="text-center py-4 text-sm lg:text-base 2xl:text-lg text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={{ duration: 0.5 }}
            >
              No modules match your search.
            </a.p>
          )}
        </section>

        <EndCta />
        <Footer />
      </main>
    </>
  );
};

export default Modules;

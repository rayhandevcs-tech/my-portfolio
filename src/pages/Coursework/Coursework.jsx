import { useState } from "react";
import CourseworkCard from "../../components/sections/coursework/CourseworkCard/CourseworkCard";
import CourseDetailsModal from "../../components/sections/coursework/CourseDetailsModal/CourseDetailsModal";
import { useCourseworkEntries } from "../../hooks/useCourseworkEntries";
import "./Coursework.css";

function Coursework() {
  const { entries = [] } = useCourseworkEntries();

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "All",
    "Core CS",
    "Data",
    "Programming",
    "Systems",
    "Software",
    "Math",
  ];

  const filteredCourses = entries.filter((course) => {
    const matchesCategory =
      filter === "All" || course.category === filter;

    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      searchText === "" ||
      course.title.toLowerCase().includes(searchText) ||
      course.description.toLowerCase().includes(searchText) ||
      course.learnings?.some((item) =>
        item.toLowerCase().includes(searchText)
      ) ||
      course.tools?.some((tool) =>
        tool.toLowerCase().includes(searchText)
      );

    return matchesCategory && matchesSearch;
  });

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="section coursework-hero">
        <div className="container">
          <div className="coursework-shell">
            <div className="coursework-hero__content">
              <p className="coursework-hero__eyebrow">Academics</p>
              <h1 className="coursework-hero__title">Relevant Coursework</h1>
              <p className="coursework-hero__intro">
                These courses represent the core areas of computer science I have
                studied, including algorithms, systems, software development, and
                mathematical foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="section coursework-page">
        <div className="container">
          <div className="coursework-shell">
            <div className="academics-toolbar">
              <div className="academics-search academics-search--with-clear">
                <input
                  type="text"
                  placeholder="Search courses, tools, or topics..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search coursework"
                />

                {search && (
                  <button
                    type="button"
                    className="academics-search__clear"
                    onClick={() => setSearch("")}
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="course-filter">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={filter === cat ? "active" : ""}
                    onClick={() => setFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="academics-results">
                <p>{filteredCourses.length} courses found</p>
              </div>
            </div>
          </div>

          <div className="coursework-grid">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((item) => (
                <CourseworkCard
                  key={item.id}
                  {...item}
                  onViewDetails={() => handleOpenModal(item)}
                />
              ))
            ) : (
              <div className="academics-empty">
                <h3>No courses found</h3>
                <p>Try adjusting your search or filter.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <CourseDetailsModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Coursework;
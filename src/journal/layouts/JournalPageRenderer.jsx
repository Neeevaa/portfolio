import React from "react";
import AboutMePage from "./AboutMePage";
import DiaryTextPage from "./DiaryTextPage";
import ProjectShowcasePage from "./ProjectShowcasePage";
import TechnicalCaseStudyPage from "./TechnicalCaseStudyPage";
import TimelineJourneyPage from "./TimelineJourneyPage";
import ResearchNotebookPage from "./ResearchNotebookPage";
import TechnicalIndexPage from "./TechnicalIndexPage";
import PhotoPersonalPage from "./PhotoPersonalPage";
import ClosingContactPage from "./ClosingContactPage";

export default function JournalPageRenderer({ pageData }) {
  if (!pageData) return null;

  switch (pageData.layoutType) {
    case "about":
      return <AboutMePage pageData={pageData} />;
    case "diary":
      return <DiaryTextPage pageData={pageData} />;
    case "project":
      return <ProjectShowcasePage pageData={pageData} />;
    case "case-study":
      return <TechnicalCaseStudyPage pageData={pageData} />;
    case "timeline":
      return <TimelineJourneyPage pageData={pageData} />;
    case "research":
      return <ResearchNotebookPage pageData={pageData} />;
    case "toolkit":
      return <TechnicalIndexPage pageData={pageData} />;
    case "personal":
      return <PhotoPersonalPage pageData={pageData} />;
    case "closing":
      return <ClosingContactPage pageData={pageData} />;
    default:
      return <DiaryTextPage pageData={pageData} />;
  }
}

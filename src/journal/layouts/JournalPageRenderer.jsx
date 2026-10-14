import React from "react";
import AboutMePage from "./AboutMePage";
import JourneyPage from "./JourneyPage";
import DiaryTextPage from "./DiaryTextPage";
import ProjectShowcasePage from "./ProjectShowcasePage";
import TechnicalCaseStudyPage from "./TechnicalCaseStudyPage";
import TimelineJourneyPage from "./TimelineJourneyPage";
import ResearchNotebookPage from "./ResearchNotebookPage";
import TechnicalIndexPage from "./TechnicalIndexPage";
import PhotoPersonalPage from "./PhotoPersonalPage";
import ClosingContactPage from "./ClosingContactPage";

export default function JournalPageRenderer({ pageData, onSelectFolio, folioMap }) {
  if (!pageData) return null;

  switch (pageData.layoutType) {
    case "about":
      return <AboutMePage pageData={pageData} />;
    case "journey":
    case "timeline":
      return (
        <JourneyPage
          pageData={pageData}
          onSelectFolio={onSelectFolio}
          folioMap={folioMap}
        />
      );
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

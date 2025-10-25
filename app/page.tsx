import Features from "@/components/Features";
import Header from "@/components/Header";
import RequirementSection from "@/components/Requirement";
import Services from "@/components/services";
import WhyChooseRolDrive from "@/components/whychooseRoldrive";
import Footer from "@/components/Footer";
import BookLondon from "@/components/BookLondon";
import Questions from "@/components/Questions";
export default function Home() {
  return (
    <div>
      <Header/>
      <Features/>
      <WhyChooseRolDrive/>
      <RequirementSection/>
      <Services/>
      <Questions/>
      <BookLondon/>
      <Footer/>
    </div>
  );
}

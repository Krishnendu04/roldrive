import Features from "@/components/Features";
import Header from "@/components/Header";
import RequirementSection from "@/components/Requirement";
import Services from "@/components/services";
import WhyChooseRolDrive from "@/components/whychooseRoldrive";

export default function Home() {
  return (
    <div>
      <Header/>
      <Features/>
      <WhyChooseRolDrive/>
      <RequirementSection/>
      <Services/>
    </div>
  );
}

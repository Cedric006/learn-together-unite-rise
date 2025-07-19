import CommunityFilters from "./CommunityFilters";
import CommunityCard from "./CommunityCard";

const CommunityHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Community</h1>
          <p className="text-muted-foreground">Connect with learners and share knowledge</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <CommunityFilters />
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <CommunityCard />
              <CommunityCard />
              <CommunityCard />
              <CommunityCard />
              <CommunityCard />
              <CommunityCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHome;
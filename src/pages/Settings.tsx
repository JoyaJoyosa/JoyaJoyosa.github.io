
import { AppLayout } from "@/components/AppLayout";

const Settings = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your preferences and data.</p>
        </div>
        <div className="rounded-lg border border-white/10 p-6">
            <h2 className="text-xl font-semibold mb-4">Appearance</h2>
            <p className="text-muted-foreground">Theme settings coming soon.</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;

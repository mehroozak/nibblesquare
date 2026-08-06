import { RoleAvatar } from "@/components/about/RoleAvatar";
import type { TeamRole } from "@/types/content";

type TeamRoleCardProps = {
  role: TeamRole;
};

export function TeamRoleCard({ role }: TeamRoleCardProps) {
  return (
    <div className="flex h-full flex-col">
      <RoleAvatar role={role} />
      <h3 className="mt-4 text-base font-semibold">
        <span className="text-primary">{role.descriptor}</span> {role.title}
      </h3>
      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
        {role.description}
      </p>
    </div>
  );
}

import { Badge, NavLink } from '@mantine/core';
import '@mantine/core/styles.css';
import { IconHome2, IconGauge, IconChevronRight, IconLogin } from '@tabler/icons-react';

function NavLinks() {
  return (
    <>
      <div style={{ maxWidth: '200px' }} >
        <NavLink
          href="/"
          label="HOME"
          leftSection={<IconHome2 size={16} stroke={1.5} />}
          rightSection={
            <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
          }
        />
        <NavLink
          href="/planner"
          label="Planner"
          leftSection={<IconGauge size={16} stroke={1.5} />}
          rightSection={
            <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
          }
        />
        <NavLink
          href="/settings"
          label="Settings"
          description="Additional information"
          leftSection={
            <Badge size="xs" color="red" circle>
              3
            </Badge>
          }
          rightSection={
            <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
          }
        />
        <NavLink
          href="/auth"
          label="LOG IN"
          leftSection={
            <IconLogin size={16} stroke={1.5}>
              3
            </IconLogin>
          }
          rightSection={
            <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
          }
        />
      </div>
    </>
    );
}

export default NavLinks;

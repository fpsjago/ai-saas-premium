// Icon mapping utility for converting icon names to SVG components
import type { ReactNode } from 'react';
import {
  BrainIcon,
  LightningIcon,
  UsersIcon,
  ChartIcon,
  ShieldIcon,
  PlugIcon,
  BeakerIcon,
  LockIcon,
  TargetIcon,
  RefreshIcon,
  PackageIcon,
  GlobeIcon,
  RocketIcon,
  CheckIcon,
} from './Icons';

export type IconName =
  | 'brain'
  | 'lightning'
  | 'users'
  | 'chart'
  | 'shield'
  | 'plug'
  | 'beaker'
  | 'lock'
  | 'target'
  | 'refresh'
  | 'package'
  | 'globe'
  | 'rocket'
  | 'check';

export function getIcon(name: IconName, size = 24): ReactNode {
  const icons: Record<IconName, any> = {
    brain: BrainIcon,
    lightning: LightningIcon,
    users: UsersIcon,
    chart: ChartIcon,
    shield: ShieldIcon,
    plug: PlugIcon,
    beaker: BeakerIcon,
    lock: LockIcon,
    target: TargetIcon,
    refresh: RefreshIcon,
    package: PackageIcon,
    globe: GlobeIcon,
    rocket: RocketIcon,
    check: CheckIcon,
  };

  const IconComponent = icons[name];
  return IconComponent ? <IconComponent size={size} /> : null;
}

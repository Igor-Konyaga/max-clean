export const ICON_NAMES = [
  'logo',
  'instagram',
  'facebook',
  'tiktok',
  'telegram',
  'viber',
  'arrow',
  'phone',
  'chemistry',
  'equipment',
  'employee',
] as const;

export type IconName = (typeof ICON_NAMES)[number];

export type PlanId = "light" | "standard" | "premium";

export type Store = {
  id: string;
  slug: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  reservation_url: string;
  instagram_url: string;
  line_url: string;
  google_maps_embed_url: string;
  regular_holiday: string;
  opening_hours: Record<string, string>;
  photos: string[];
  plan: PlanId;
};

export type MenuItem = {
  id: string;
  store_id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string | null;
  is_recommended: boolean;
};

export type MonthlyReport = {
  month: string;
  page_views: number;
  phone_clicks: number;
  map_clicks: number;
  line_clicks: number;
  reservation_clicks: number;
};

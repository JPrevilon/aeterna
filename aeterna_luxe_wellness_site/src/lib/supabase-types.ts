export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id:string; created_at:string; name:string; email:string; phone:string | null; interest:string | null;
          message:string; source:string | null; status:string; notes:string | null;
        };
        Insert: {
          id?:string; created_at?:string; name:string; email:string; phone?:string | null; interest?:string | null;
          message:string; source?:string | null; status?:string; notes?:string | null;
        };
        Update: Partial<Database["public"]["Tables"]["leads"]["Insert"]>;
        Relationships: [];
      };
      newsletter_subscribers: {
        Row: { id:string; created_at:string; updated_at:string; email:string; name:string | null; source:string | null; status:string; };
        Insert: { id?:string; created_at?:string; updated_at?:string; email:string; name?:string | null; source?:string | null; status?:string; };
        Update: Partial<Database["public"]["Tables"]["newsletter_subscribers"]["Insert"]>;
        Relationships: [];
      };
      booking_requests: {
        Row: {
          id:string; created_at:string; name:string; email:string; phone:string | null; service_slug:string;
          preferred_duration:string | null; preferred_date:string | null; preferred_time:string | null; earliest_available:boolean;
          add_ons:string[] | null; notes:string | null; understands_consult_required:boolean; status:string; staff_notes:string | null;
        };
        Insert: {
          id?:string; created_at?:string; name:string; email:string; phone?:string | null; service_slug:string;
          preferred_duration?:string | null; preferred_date?:string | null; preferred_time?:string | null; earliest_available?:boolean;
          add_ons?:string[] | null; notes?:string | null; understands_consult_required?:boolean; status?:string; staff_notes?:string | null;
        };
        Update: Partial<Database["public"]["Tables"]["booking_requests"]["Insert"]>;
        Relationships: [];
      };
      consultation_requests: {
        Row: {
          id:string; created_at:string; name:string; email:string; phone:string | null; interest:string; service_slug:string | null;
          message:string | null; understands_consult_required:boolean; status:string;
        };
        Insert: {
          id?:string; created_at?:string; name:string; email:string; phone?:string | null; interest:string; service_slug?:string | null;
          message?:string | null; understands_consult_required?:boolean; status?:string;
        };
        Update: Partial<Database["public"]["Tables"]["consultation_requests"]["Insert"]>;
        Relationships: [];
      };
      services: {
        Row: {
          id:string; created_at:string; slug:string; title:string; category:string; summary:string; description:string | null;
          durations:string[] | null; price_label:string | null; starting_price:number | null; consult_required:boolean | null;
          featured:boolean | null; image:string | null; active:boolean;
        };
        Insert: {
          id?:string; created_at?:string; slug:string; title:string; category:string; summary:string; description?:string | null;
          durations?:string[] | null; price_label?:string | null; starting_price?:number | null; consult_required?:boolean | null;
          featured?:boolean | null; image?:string | null; active?:boolean;
        };
        Update: Partial<Database["public"]["Tables"]["services"]["Insert"]>;
        Relationships: [];
      };
      products: {
        Row: {
          id:string; created_at:string; slug:string; title:string; category:string; summary:string; price_label:string | null;
          unit_amount:number | null; consult_required:boolean | null; consultation_deposit:boolean | null; featured:boolean | null; image:string | null;
          details:string[] | null; benefits:string[] | null; pairings:string[] | null; stripe_price_id:string | null; active:boolean;
        };
        Insert: {
          id?:string; created_at?:string; slug:string; title:string; category:string; summary:string; price_label?:string | null;
          unit_amount?:number | null; consult_required?:boolean | null; consultation_deposit?:boolean | null; featured?:boolean | null; image?:string | null;
          details?:string[] | null; benefits?:string[] | null; pairings?:string[] | null; stripe_price_id?:string | null; active?:boolean;
        };
        Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
        Relationships: [];
      };
      memberships: {
        Row: {
          id:string; created_at:string; slug:string; title:string; price_label:string; monthly_amount:number | null;
          summary:string | null; best_for:string | null; value_label:string | null; features:string[] | null;
          popular:boolean | null; stripe_price_id:string | null; active:boolean;
        };
        Insert: {
          id?:string; created_at?:string; slug:string; title:string; price_label:string; monthly_amount?:number | null;
          summary?:string | null; best_for?:string | null; value_label?:string | null; features?:string[] | null;
          popular?:boolean | null; stripe_price_id?:string | null; active?:boolean;
        };
        Update: Partial<Database["public"]["Tables"]["memberships"]["Insert"]>;
        Relationships: [];
      };
      gift_card_purchases: {
        Row: {
          id:string; created_at:string; buyer_name:string | null; buyer_email:string | null; recipient_name:string | null;
          recipient_email:string | null; amount:number; message:string | null; stripe_checkout_session_id:string | null; status:string;
        };
        Insert: {
          id?:string; created_at?:string; buyer_name?:string | null; buyer_email?:string | null; recipient_name?:string | null;
          recipient_email?:string | null; amount:number; message?:string | null; stripe_checkout_session_id?:string | null; status?:string;
        };
        Update: Partial<Database["public"]["Tables"]["gift_card_purchases"]["Insert"]>;
        Relationships: [];
      };
      checkout_events: {
        Row: { id:string; created_at:string; stripe_event_id:string | null; type:string | null; payload:Json | null; };
        Insert: { id?:string; created_at?:string; stripe_event_id?:string | null; type?:string | null; payload?:Json | null; };
        Update: Partial<Database["public"]["Tables"]["checkout_events"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

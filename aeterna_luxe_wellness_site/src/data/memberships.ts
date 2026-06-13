export type Membership = {
  slug:string; title:string; price:string; monthlyAmount?:number; stripePriceId?:string; popular?:boolean;
  bestFor:string; value:string; summary:string; features:string[];
};

export const memberships: Membership[] = [
  { slug:"aeterna-glow", title:"Aeterna Glow", price:"$149/mo", monthlyAmount:149, bestFor:"Wellness shots and routine maintenance", value:"Approx. $165+ monthly wellness value", summary:"Monthly wellness shot and product benefits.", features:["1 wellness shot monthly (B12, Glutathione, or Lipo-C)","10% off eligible IV therapy when clinically appropriate","10% off products","Priority booking"] },
  { slug:"aeterna-restore", title:"Aeterna Restore", price:"$249/mo", monthlyAmount:249, popular:true, bestFor:"Recovery, glow, and routine wellness", value:"Approx. $295+ monthly wellness value", summary:"Higher-touch recovery, glow, and routine wellness.", features:["1 monthly wellness treatment (IV or device, when clinically appropriate)","1 eligible B12 or B-complex shot after consultation","15% off IV therapy when clinically appropriate","15% off products"] },
  { slug:"aeterna-longevity", title:"Aeterna Longevity", price:"$399/mo", monthlyAmount:399, bestFor:"Consult-first wellness planning", value:"Approx. $475+ monthly planning value", summary:"Energy support, longevity planning, and advanced care.", features:["Monthly wellness consultation","Monthly IV therapy credit when clinically appropriate","Eligible wellness shot after consultation","15% off advanced treatments"] },
  { slug:"aeterna-elite", title:"Aeterna Elite", price:"Custom", bestFor:"Private concierge care", value:"Custom plan", summary:"Private concierge wellness and beauty plan.", features:["Private wellness plan","VIP booking","Provider-guided advanced treatment planning","Exclusive event access"] }
];
export const membershipBySlug = (slug:string) => memberships.find(membership => membership.slug === slug);

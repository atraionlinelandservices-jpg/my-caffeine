import { useOwnerProfile } from "@/hooks/useLocalStore";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  CheckCircle2,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  User2,
} from "lucide-react";
import { motion } from "motion/react";

export default function OwnerProfilePage() {
  const { profile } = useOwnerProfile();

  const hasAnyInfo =
    profile.name ||
    profile.phone ||
    profile.email ||
    profile.bio ||
    profile.address;

  if (!hasAnyInfo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{ background: "oklch(0.95 0.03 255)" }}
        >
          <User2
            className="w-10 h-10"
            style={{ color: "oklch(0.55 0.12 255)" }}
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">
            প্রোফাইল তথ্য নেই
          </h2>
          <p className="text-muted-foreground text-sm max-w-sm">
            অ্যাডমিন প্যানেল থেকে মালিকের প্রোফাইল পূরণ করুন।
          </p>
        </div>
        <Link
          to="/admin"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.45 0.15 255), oklch(0.38 0.14 260))",
          }}
        >
          অ্যাডমিন প্যানেলে যান
        </Link>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.97 0.01 240)" }}
    >
      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.09 260) 0%, oklch(0.26 0.13 240) 50%, oklch(0.22 0.10 255) 100%)",
        }}
      >
        {/* BG decoration */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 60%, oklch(0.7 0.15 60) 0%, transparent 50%), radial-gradient(circle at 80% 30%, oklch(0.6 0.18 300) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-white/20 shadow-xl"
              style={{ background: "oklch(0.32 0.12 255)" }}
            >
              {profile.profilePhotoBase64 ? (
                <img
                  src={profile.profilePhotoBase64}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User2 className="w-16 h-16 text-white/60" />
                </div>
              )}
            </motion.div>

            {/* Name & title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center sm:text-left pb-1"
            >
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "oklch(0.55 0.18 60 / 0.25)",
                    color: "oklch(0.85 0.12 60)",
                    border: "1px solid oklch(0.55 0.18 60 / 0.35)",
                  }}
                >
                  ✓ যাচাইকৃত মালিক
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white">
                {profile.name || "মালিকের নাম"}
              </h1>
              <p className="text-white/70 text-base mt-1">
                {profile.title || "সাইট অ্যাডমিন ও মালিক"}
              </p>
              {profile.district && (
                <p className="text-white/50 text-sm mt-1 flex items-center gap-1 justify-center sm:justify-start">
                  <MapPin className="w-3.5 h-3.5" /> {profile.district}, বাংলাদেশ
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Contact & Stats */}
          <div className="space-y-5">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl border border-border shadow-sm p-5"
            >
              <h3 className="font-semibold text-sm text-foreground mb-4 flex items-center gap-2">
                <Phone
                  className="w-4 h-4"
                  style={{ color: "oklch(0.50 0.16 155)" }}
                />
                যোগাযোগ করুন
              </h3>
              <div className="space-y-3">
                {profile.phone && (
                  <a
                    href={`tel:${profile.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.95 0.05 145)" }}
                    >
                      <Phone
                        className="w-4 h-4"
                        style={{ color: "oklch(0.45 0.16 145)" }}
                      />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">ফোন</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-green-700">
                        {profile.phone}
                      </div>
                    </div>
                  </a>
                )}
                {profile.whatsapp && (
                  <a
                    href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.92 0.07 145)" }}
                    >
                      <MessageCircle
                        className="w-4 h-4"
                        style={{ color: "oklch(0.42 0.18 145)" }}
                      />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        WhatsApp
                      </div>
                      <div className="text-sm font-medium text-foreground group-hover:text-green-700">
                        {profile.whatsapp}
                      </div>
                    </div>
                  </a>
                )}
                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.94 0.04 240)" }}
                    >
                      <Mail
                        className="w-4 h-4"
                        style={{ color: "oklch(0.45 0.15 240)" }}
                      />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">ইমেইল</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-blue-700">
                        {profile.email}
                      </div>
                    </div>
                  </a>
                )}
                {profile.address && (
                  <div className="flex items-start gap-3 p-3 rounded-xl">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.94 0.04 50)" }}
                    >
                      <MapPin
                        className="w-4 h-4"
                        style={{ color: "oklch(0.50 0.15 50)" }}
                      />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">ঠিকানা</div>
                      <div className="text-sm text-foreground leading-snug">
                        {profile.address}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Social Links */}
            {(profile.facebook || profile.website) && (
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl border border-border shadow-sm p-5"
              >
                <h3 className="font-semibold text-sm text-foreground mb-4 flex items-center gap-2">
                  <Globe
                    className="w-4 h-4"
                    style={{ color: "oklch(0.50 0.14 255)" }}
                  />
                  সোশ্যাল ও ওয়েব
                </h3>
                <div className="space-y-2">
                  {profile.facebook && (
                    <a
                      href={profile.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: "oklch(0.55 0.18 255)" }}
                      >
                        <span className="text-white text-sm font-bold">f</span>
                      </div>
                      <span className="text-sm font-medium text-blue-700 group-hover:underline flex items-center gap-1">
                        Facebook <ExternalLink className="w-3 h-3" />
                      </span>
                    </a>
                  )}
                  {profile.website && (
                    <a
                      href={profile.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: "oklch(0.94 0.04 240)" }}
                      >
                        <Globe
                          className="w-4 h-4"
                          style={{ color: "oklch(0.45 0.15 240)" }}
                        />
                      </div>
                      <span className="text-sm font-medium text-blue-700 group-hover:underline flex items-center gap-1">
                        ওয়েবসাইট <ExternalLink className="w-3 h-3" />
                      </span>
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right: Bio & Credentials */}
          <div className="lg:col-span-2 space-y-5">
            {/* Bio */}
            {profile.bio && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-2xl border border-border shadow-sm p-6"
              >
                <h3 className="font-semibold text-base text-foreground mb-3 flex items-center gap-2">
                  <User2
                    className="w-5 h-5"
                    style={{ color: "oklch(0.50 0.14 255)" }}
                  />
                  পরিচিতি
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {profile.bio}
                </p>
              </motion.div>
            )}

            {/* Credentials */}
            {(profile.experience || profile.licenseNo || profile.nid) && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl border border-border shadow-sm p-6"
              >
                <h3 className="font-semibold text-base text-foreground mb-4 flex items-center gap-2">
                  <Award
                    className="w-5 h-5"
                    style={{ color: "oklch(0.55 0.18 60)" }}
                  />
                  পেশাদার যোগ্যতা
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profile.experience && (
                    <div
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{
                        background: "oklch(0.97 0.02 155)",
                        border: "1px solid oklch(0.90 0.06 155)",
                      }}
                    >
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "oklch(0.45 0.16 155)" }}
                      />
                      <div>
                        <div className="text-xs text-muted-foreground">
                          অভিজ্ঞতা
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {profile.experience}
                        </div>
                      </div>
                    </div>
                  )}
                  {profile.licenseNo && (
                    <div
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{
                        background: "oklch(0.97 0.02 255)",
                        border: "1px solid oklch(0.90 0.06 255)",
                      }}
                    >
                      <ShieldCheck
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "oklch(0.45 0.15 255)" }}
                      />
                      <div>
                        <div className="text-xs text-muted-foreground">
                          লাইসেন্স নম্বর
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {profile.licenseNo}
                        </div>
                      </div>
                    </div>
                  )}
                  {profile.nid && (
                    <div
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{
                        background: "oklch(0.97 0.02 50)",
                        border: "1px solid oklch(0.90 0.06 50)",
                      }}
                    >
                      <ShieldCheck
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "oklch(0.50 0.15 50)" }}
                      />
                      <div>
                        <div className="text-xs text-muted-foreground">
                          NID নম্বর
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {profile.nid}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Platform CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.22 0.09 260) 0%, oklch(0.28 0.12 240) 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 50%, oklch(0.7 0.15 60) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-white font-bold text-base mb-2 flex items-center gap-2">
                  <Building2 className="w-5 h-5" /> জমির মার্কেটপ্লেস
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  বাংলাদেশের সেরা D2C জমি কেনাবেচার প্ল্যাটফর্মে সরাসরি মালিকের সাথে যোগাযোগ
                  করুন।
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.50 0.18 60), oklch(0.45 0.16 55))",
                  }}
                >
                  জমির লিস্টিং দেখুন
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

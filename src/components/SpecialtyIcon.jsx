import React from 'react';
import { 
  HeartHandshake, Activity, HeartPulse, Brain, Bone, 
  Ear, Sparkles, Stethoscope, Users, Heart, MapPin 
} from 'lucide-react';

export function SpecialtyIcon({ name, className = "w-5 h-5 text-[#78266F]" }) {
  switch (name) {
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    case 'Activity':
      return <Activity className={className} />;
    case 'HeartPulse':
      return <HeartPulse className={className} />;
    case 'Brain':
      return <Brain className={className} />;
    case 'Bone':
      return <Bone className={className} />;
    case 'Ear':
      return <Ear className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Stethoscope':
      return <Stethoscope className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Heart':
      return <Heart className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    default:
      return <Activity className={className} />;
  }
}


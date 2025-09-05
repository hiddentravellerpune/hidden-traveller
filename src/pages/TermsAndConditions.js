import React from 'react';
import {
  FileText,
  User,
  Shield,
  HeartCrack,
  Briefcase,
  Users,
  Camera,
  CalendarDays,
  GlassWater,
  Scale,
  Gavel,
} from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <FileText size={48} className="text-teal-500" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Terms & Conditions
          </h1>
        </div>

        <p className="text-lg text-gray-600 mb-12 text-center">
          By registering for a Hidden Traveller trip, you agree to the following terms.
          Please read them carefully.
        </p>

        {/* Eligibility Section */}
        <div className="flex items-start space-x-4 mb-8">
          <User size={32} className="text-teal-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Eligibility</h2>
            <p className="text-gray-600">
              Participants must be **18 years of age or older** (as of the trip start
              date) and fully competent to understand these terms. If below 18, a
              parent or guardian must sign a consent/waiver form and will bear
              full responsibility. Any medical condition, illness, disability, or
              ongoing treatment must be declared at the time of booking. Failure
              to disclose may result in removal from the trip without refund.
            </p>
          </div>
        </div>

        {/* Acceptance of Terms Section */}
        <div className="flex items-start space-x-4 mb-8">
          <Shield size={32} className="text-teal-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By registering, participants confirm that they have read, understood,
              and agreed to these Terms & Conditions. Participants must follow all
              instructions, guidelines, and safety measures provided by Hidden
              Traveller trip leaders.
            </p>
          </div>
        </div>

        {/* Assumption of Risk Section */}
        <div className="flex items-start space-x-4 mb-8">
          <HeartCrack size={32} className="text-teal-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Assumption of Risk
            </h2>
            <p className="text-gray-600">
              Participation in trekking, backpacking, and other activities involves
              inherent risks. By joining, participants agree they are doing so at
              their own risk and Hidden Traveller shall not be liable for any
              accident, injury, loss, or damage arising during the trip.
            </p>
          </div>
        </div>

        {/* Medical & Emergency Costs Section */}
        <div className="flex items-start space-x-4 mb-8">
          <Briefcase size={32} className="text-teal-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Medical & Emergency Costs
            </h2>
            <p className="text-gray-600">
              In case of accident, injury, or illness during the trip, all expenses
              related to medical treatment, evacuation, ambulance, or
              hospitalization will be borne by the participant.
            </p>
          </div>
        </div>

        {/* Personal Belongings Section */}
        <div className="flex items-start space-x-4 mb-8">
          <Users size={32} className="text-teal-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Personal Belongings
            </h2>
            <p className="text-gray-600">
              Each participant is responsible for their own belongings. Hidden
              Traveller is not liable for loss, theft, or damage of luggage,
              valuables, or personal items.
            </p>
          </div>
        </div>

        {/* Behavior & Conduct Section */}
        <div className="flex items-start space-x-4 mb-8">
          <Users size={32} className="text-teal-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Behaviour & Conduct
            </h2>
            <p className="text-gray-600">
              Participants must respect local culture, fellow travellers, and
              nature. Any abusive, unsafe, or disruptive behaviour (including
              intoxication or harassment) may lead to immediate removal from the
              trip without refund.
            </p>
          </div>
        </div>

        {/* Photography & Media Section */}
        <div className="flex items-start space-x-4 mb-8">
          <Camera size={32} className="text-teal-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Photography & Media
            </h2>
            <p className="text-gray-600">
              Participants grant Hidden Traveller full rights to use photos,
              videos, and recordings taken during the trip for promotional,
              marketing, and digital purposes without any compensation.
            </p>
          </div>
        </div>

        {/* Trip Changes & Cancellation Section */}
        <div className="flex items-start space-x-4 mb-8">
          <CalendarDays size={32} className="text-teal-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Trip Changes & Cancellation
            </h2>
            <p className="text-gray-600">
              Hidden Traveller reserves the right to alter itineraries, cancel or
              reschedule trips due to weather, safety concerns, government
              restrictions, or unforeseen circumstances without prior notice. In
              such cases, alternate arrangements or credits may be provided, but
              there is no guarantee of a refund.
            </p>
          </div>
        </div>

        {/* Alcohol & Smoking Policy Section */}
        <div className="flex items-start space-x-4 mb-8">
          <GlassWater size={32} className="text-teal-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Alcohol & Smoking Policy
            </h2>
            <p className="text-gray-600">
              Permitted only for participants of legal age as per government
              regulations. Consumption is allowed only if it doesn’t disturb the
              group, cause safety risks, or violate local laws.
            </p>
          </div>
        </div>

        {/* Indemnity Section */}
        <div className="flex items-start space-x-4 mb-8">
          <Scale size={32} className="text-teal-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Indemnity</h2>
            <p className="text-gray-600">
              Participants agree to indemnify and hold harmless Hidden Traveller
              and its team against any claims, losses, damages, or liabilities
              arising from their participation.
            </p>
          </div>
        </div>

        {/* Jurisdiction Section */}
        <div className="flex items-start space-x-4 mb-8">
          <Gavel size={32} className="text-teal-500 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Jurisdiction</h2>
            <p className="text-gray-600">
              All disputes shall be subject to the exclusive jurisdiction of
              courts in Pune, Maharashtra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
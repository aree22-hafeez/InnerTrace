import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Briefcase, User, Sparkles, Search } from 'lucide-react';

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  // State for each step
  const [whoAreYou, setWhoAreYou] = useState(null);
  const [goals, setGoals] = useState([]);
  const [diet, setDiet] = useState(null);
  const [fitnessLevel, setFitnessLevel] = useState(50); // 0 to 100

  // Check if current step is valid to proceed
  const isNextActive = () => {
    if (step === 1) return whoAreYou !== null;
    if (step === 2) return goals.length > 0;
    if (step === 3) return diet !== null;
    if (step === 4) return true; // Slider always has a value
    return false;
  };

  const handleNext = () => {
    if (isNextActive()) {
      if (step < 4) {
        setStep(step + 1);
      } else {
        // Final step complete, navigate to Landing for now (or a hypothetical dashboard)
        navigate('/home');
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleGoal = (goal) => {
    if (goals.includes(goal)) {
      setGoals(goals.filter(g => g !== goal));
    } else {
      setGoals([...goals, goal]);
    }
  };

  // Shared Styles
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    fontFamily: 'Inter, sans-serif',
    padding: '40px 20px',
    boxSizing: 'border-box'
  };

  const contentMaxWidth = '500px';

  const titleStyle = {
    fontSize: '28px',
    fontWeight: '800',
    color: '#1A1D2D',
    margin: '32px 0 8px 0',
    textAlign: 'center'
  };

  const subtitleStyle = {
    fontSize: '16px',
    color: '#808291',
    marginBottom: '40px',
    textAlign: 'center'
  };

  const btnNextStyle = {
    width: '100%',
    maxWidth: contentMaxWidth,
    height: '56px',
    borderRadius: '16px',
    border: 'none',
    fontSize: '18px',
    fontWeight: '600',
    cursor: isNextActive() ? 'pointer' : 'not-allowed',
    backgroundColor: isNextActive() ? '#347562' : '#F3F4F6',
    color: isNextActive() ? '#FFFFFF' : '#9CA3AF',
    transition: 'all 0.2s',
    marginTop: 'auto',
    marginBottom: '16px'
  };

  const btnBackStyle = {
    width: '100%',
    maxWidth: contentMaxWidth,
    height: '56px',
    borderRadius: '16px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: '#D1D5DB', // gray
    color: '#1A1D2D',
    transition: 'opacity 0.2s'
  };

  // Step 1 Constants
  const whoAreYouOptions = [
    { id: 'student', label: 'Student / Young Adult', icon: <GraduationCap size={28} /> },
    { id: 'professional', label: 'Working Professional', icon: <Briefcase size={28} /> },
    { id: 'older', label: 'Older Adult', icon: <User size={28} /> },
    { id: 'enthusiast', label: 'Wellness Enthusiast', icon: <Sparkles size={28} /> }
  ];

  // Step 2 Constants
  const goalOptions = [
    'Weight Loss', 'Muscle Gain', 'Stress Relief', 'Better Sleep', 
    'Clean Eating', 'Yoga', 'Glowing Skin', 'Mental Wellness'
  ];

  // Step 3 Constants
  const dietOptions = [
    'High Protein', 'Vegan', 'Low Carb', 'Balanced/Clean', 'Keto', 'No Preference'
  ];

  return (
    <div style={containerStyle}>
      {/* Progress Header */}
      <div style={{ width: '100%', maxWidth: contentMaxWidth, marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#808291', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
          <span>Step {step} of 4</span>
          <span>{step * 25}%</span>
        </div>
        <div style={{ width: '100%', height: '8px', backgroundColor: '#D1D5DB', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: `${step * 25}%`, height: '100%', backgroundColor: '#347562', transition: 'width 0.3s ease' }}></div>
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: contentMaxWidth, flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* STEP 1: Who are you? */}
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <h1 style={titleStyle}>Who are you?</h1>
            <p style={subtitleStyle}>Help us personalize your experience</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {whoAreYouOptions.map(opt => {
                const isSelected = whoAreYou === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setWhoAreYou(opt.id)}
                    style={{
                      height: '140px',
                      backgroundColor: '#FFFFFF',
                      border: isSelected ? '2px solid #347562' : '1px solid #E5E7EB',
                      borderRadius: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      color: '#1A1D2D'
                    }}
                  >
                    <div style={{ 
                      width: 56, height: 56, borderRadius: '16px', 
                      backgroundColor: isSelected ? '#E8FAF4' : '#F3F4F6', 
                      display: 'flex', justifyContent: 'center', alignItems: 'center',
                      marginBottom: '16px',
                      color: isSelected ? '#347562' : '#1A1D2D'
                    }}>
                      {opt.icon}
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Your Goals */}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <h1 style={titleStyle}>Your Goals</h1>
            <p style={subtitleStyle}>Select all that apply</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
              {goalOptions.map(goal => {
                const isSelected = goals.includes(goal);
                return (
                  <button
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    style={{
                      padding: '12px 24px',
                      backgroundColor: '#FFFFFF',
                      border: isSelected ? '2px solid #347562' : '1px solid #E5E7EB',
                      borderRadius: '30px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: isSelected ? '#347562' : '#1A1D2D',
                      transition: 'all 0.2s'
                    }}
                  >
                    {goal}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Diet Preference */}
        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <h1 style={titleStyle}>Diet Preference</h1>
            <p style={subtitleStyle}>Choose your dietary preference</p>
            
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F5F7F6', borderRadius: '24px', padding: '0 16px', height: '48px', marginBottom: '24px', border: '1px solid #99C5B5' }}>
              <Search size={20} color="#9CA3AF" style={{ marginRight: '12px' }} />
              <input type="text" placeholder="Search diet type..." style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1, fontSize: '15px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
              {dietOptions.map(opt => {
                const isSelected = diet === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setDiet(opt)}
                    style={{
                      width: '100%',
                      padding: '16px 24px',
                      backgroundColor: '#FFFFFF',
                      border: isSelected ? '2px solid #347562' : '1px solid #E5E7EB',
                      borderRadius: '16px',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#1A1D2D',
                      textAlign: 'left',
                      transition: 'all 0.2s'
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Fitness Level */}
        {step === 4 && (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center' }}>
            <h1 style={titleStyle}>Fitness Level</h1>
            <p style={subtitleStyle}>How active are you currently?</p>
            
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏃</div>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1A1D2D', marginBottom: '32px' }}>
                {fitnessLevel < 33 ? 'Sedentary' : fitnessLevel < 66 ? 'Moderate' : 'Athlete'}
              </h2>
              
              <div style={{ width: '100%', padding: '0 20px', position: 'relative' }}>
                <input 
                  type="range" 
                  min="0" max="100" 
                  value={fitnessLevel}
                  onChange={(e) => setFitnessLevel(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    appearance: 'none',
                    height: '8px',
                    borderRadius: '4px',
                    background: `linear-gradient(to right, #347562 ${fitnessLevel}%, #E5E7EB ${fitnessLevel}%)`,
                    outline: 'none'
                  }}
                  className="custom-slider"
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 20px', marginTop: '16px', color: '#808291', fontSize: '13px', fontWeight: '500' }}>
                <span>Sedentary</span>
                <span>Athlete</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: 'auto' }}>
          <button 
            onClick={handleNext} 
            disabled={!isNextActive()}
            style={btnNextStyle}
          >
            {step === 4 ? 'Complete Setup >' : 'Next >'}
          </button>
          
          {step > 1 && (
            <button 
              onClick={handleBack} 
              style={btnBackStyle}
              onMouseOver={(e) => e.target.style.opacity = '0.9'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              Back
            </button>
          )}
        </div>

      </div>

      <style>{`
        .custom-slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 4px solid #347562;
          cursor: pointer;
        }
        .custom-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 4px solid #347562;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Onboarding;
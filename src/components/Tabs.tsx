import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('technologies');

  const tabs = [
    { id: 'technologies', label: 'Technologies Used' },
    { id: 'notes', label: 'Notes' },
    { id: 'tasks', label: 'Tasks' },
    { id: 'images', label: 'Images' },
  ];

  return (
    <div className="border border-light-outline dark:border-dark-outline rounded-lg overflow-hidden">
      {/* Tab Headers */}
      <div className="flex border-b border-light-outline dark:border-dark-outline overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-light-main dark:bg-dark-main text-light-button-text dark:text-dark-button-text'
                : 'hover:bg-light-background dark:hover:bg-dark-background'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {/* TODO: this content needs to be dynamic */}
      <div className="p-6">
        {activeTab === 'technologies' && (
          <div>
            <h3 className="font-bold mb-4">Technologies Used</h3>
            <p className="text-light-grey dark:text-dark-grey">
              Technology stack and tools will be listed here based on project metadata.
            </p>
          </div>
        )}

        {activeTab === 'notes' && (
          <div>
            <h3 className="font-bold mb-4">Development Notes</h3>
            <p className="text-light-grey dark:text-dark-grey">
              Project notes and insights will be displayed here.
            </p>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div>
            <h3 className="font-bold mb-4">Tasks</h3>
            <p className="text-light-grey dark:text-dark-grey">
              Task list and progress tracking will be shown here.
            </p>
          </div>
        )}

        {activeTab === 'images' && (
          <div>
            <h3 className="font-bold mb-4">Project Images</h3>
            <p className="text-light-grey dark:text-dark-grey">
              Additional project images and screenshots will be displayed here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

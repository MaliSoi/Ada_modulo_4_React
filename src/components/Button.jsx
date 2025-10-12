import React from "react";

export default function Button ({label, disabled}) {
    return (
        <button
        disabled={disabled}
        className={`px-4 py-2 reounded text-white font semibold`}
    )
}
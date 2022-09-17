import React from "react";
import {
	EnvelopeIcon,
	UserIcon,
	LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function InputIcon({ icon }) {
	const styles = "w-6 h-6 text-primary-key";

	if (icon === "UserIcon") {
		return <UserIcon className={styles} />;
	} else if (icon === "EnvelopeIcon") {
		return <EnvelopeIcon className={styles} />;
	} else if (icon === "LockClosedIcon") {
		return <LockClosedIcon className={styles} />;
	} else {
		return "";
	}
}

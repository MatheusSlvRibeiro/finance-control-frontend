import styles from "./skeletonLoader.module.scss";

export type SkeletonLoaderProps = {
	rows?: number;
	height?: number | string;
	className?: string;
};

export function SkeletonLoader({
	rows = 4,
	height = 32,
	className = "",
}: SkeletonLoaderProps) {
	return (
		<div className={`${styles.loading} ${className}`}>
			{Array.from({ length: rows }).map((_, i) => (
				<div
					key={i}
					className={styles.skeletonRow}
					style={{
						height:
							typeof height === "number" ? `${height}px` : height,
					}}
				/>
			))}
		</div>
	);
}
